import User from "../models/userModel.js";

export const showUser = async (req, res, next) => {
  const user = await User.findOne(req.params);

  const data = res.hateos_item(user);
  res.ok(data);
}

export const listUsers = async (req, res, next) => {
  const users = await User.find({});

  const data = res.hateos_list("users", users);
  res.ok(data);
}

export const createUser = async (req, res, next) => {
  await new User(req.body).save();

  res.created();
}

export const editUser = async (req, res, next) => {
  const user = await User.findOneAndUpdate(req.params, req.body, { new: true });

  const data = res.hateos_item(user);
  res.ok(data);
}

export const deleteUser = async (req, res, next) => {
  await User.findByIdAndDelete(req.params._id);

  res.no_content();
}
