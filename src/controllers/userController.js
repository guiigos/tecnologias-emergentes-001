import httpStatus from "http-status";
import User from "../models/userModel.js";

export const showUser = async (req, res, next) => {
  try {
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
  } catch (err) {
    res.internal_server_error(err.message);
  }
}

export const listUsers = async (req, res, next) => {
  try {
    const users = await User.find({});

    res
      .status(httpStatus.OK)
      .json({
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
  } catch (err) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
}

export const createUser = async (req, res, next) => {
  try {
    await new User(req.body).save();

    res
      .status(httpStatus.CREATED)
      .send();
  } catch (err) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
}

export const editUser = async (req, res, next) => {
  try {
    const user = await User.findOneAndUpdate(req.params, req.body, { new: true });

    res
      .status(httpStatus.OK)
      .json({
        ...user._doc,
        _links: [
          { rel: "self", href: req.originalUrl, method: req.method },
          { rel: "list", href: req.baseUrl, method: "GET" },
          { rel: "update", href: `${req.baseUrl}/${req.params._id}`, method: "PUT" },
          { rel: "delete", href: `${req.baseUrl}/${req.params._id}`, method: "DELETE" },
        ],
      });
  } catch (err) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
}

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params._id);

    res
      .status(httpStatus.OK)
      .send();
  } catch (err) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
}
