import User from "../models/userModel.js";
import httpStatus from "http-status";

export const showUser = async (req, res, next) => {
  try {
    const user = await User.findOne(req.params);

    res
      .status(httpStatus.OK)
      .json(user);
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
}

export const listUsers = async (req, res, next) => {
  try {
    const users = await User.find({});

    res
      .status(httpStatus.OK)
      .json(users);
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
}

export const createUser = async (req, res, next) => {
  try {
    await new User(req.body).save();

    res
      .status(httpStatus.CREATED)
      .send();
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
}

export const editUser = async (req, res, next) => {
  try {
    const user = await User
      .findByIdAndUpdate(req.params, req.body, { new: true });

    res
      .status(httpStatus.OK)
      .json(user);
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
}

export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params._id);

    res
      .status(httpStatus.OK)
      .json(user);
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
}
