import User from "../models/userModel.js";

export const showUser = async (req, res, next) => {
  const user = await User.findOne(req.params);

  res.ok({
    ...user._doc,
    _links: [
      { rel: "self", href: req.originalUrl, method: req.method },
      { rel: "list", href: req.baseUrl, method: "GET" },
      { rel: "update", href: `${req.baseUrl}/${req.params._id}`, method: "PUT" },
      { rel: "delete", href: `${req.baseUrl}/${req.params._id}`, method: "DELETE" },
    ],
  });
}

export const listUsers = async (req, res, next) => {
  const users = await User.find({});

  res.ok({
    users: users.map((user) => ({
      ...user._doc,
      _links: [
        { rel: "self", href: `${req.baseUrl}/${user._id}`, method: "GET" },
      ],
    })),
    _links: [
      { rel: "self", href: req.baseUrl, method: "GET" },
      { rel: "create", href: req.baseUrl, method: "POST" }
    ],
  });
}

export const createUser = async (req, res, next) => {
  await new User(req.body).save();

  res.created();
}

export const editUser = async (req, res, next) => {
  const user = await User.findOneAndUpdate(req.params, req.body, { new: true });

  res.ok({
    ...user._doc,
    _links: [
      { rel: "self", href: req.originalUrl, method: req.method },
      { rel: "list", href: req.baseUrl, method: "GET" },
      { rel: "update", href: `${req.baseUrl}/${req.params._id}`, method: "PUT" },
      { rel: "delete", href: `${req.baseUrl}/${req.params._id}`, method: "DELETE" },
    ],
  });
}

export const deleteUser = async (req, res, next) => {
  await User.findByIdAndDelete(req.params._id);

  res.no_content();
}
