import httpStatus from "http-status";
import User from "../models/userModel.js";

export const showUser = async (req, res, next) => {
  try {
    const user = await User.findOne(req.params);

    res
      .status(httpStatus.OK)
      .json(user);
  } catch (err) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
}

export const listUsers = async (req, res, next) => {
  try {
    const users = await User.find({});

    res
      .status(httpStatus.OK)
      .json(users);
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
  next();
}

export const deleteUser = async (req, res, next) => {
  next();
}
