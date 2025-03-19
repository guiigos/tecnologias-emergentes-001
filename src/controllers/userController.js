import User from "../models/userModel.js";

export const showUser = async (req, res, next) => {
  try {
    const user = await User.findOne(req.params);

    const data = res.hateos_item(user);
    res.ok(data);
  } catch (err) {
    next(err);
  }
}

export const listUsers = async (req, res, next) => {
  try {
    const page = parseInt(req.query._page) || 1;
    const size = parseInt(req.query._size) || 10;

    const offset = (page - 1) * size;

    const users = await User
      .find({})
      .skip(offset)
      .limit(size);

    const totalData = await User.countDocuments();
    const totalPages = Math.ceil(totalData / size);

    const data = res.hateos_list("users", users, totalPages);
    res.ok(data);
  } catch (err) {
    next(err);
  }
}

export const createUser = async (req, res, next) => {
  try {
    await new User(req.body).save();

    res.created();
  } catch (err) {
    next(err);
  }
}

export const editUser = async (req, res, next) => {
  try {
    const user = await User.findOneAndUpdate(req.params, req.body, { new: true });

    const data = res.hateos_item(user);
    res.ok(data);
  } catch (err) {
    next(err);
  }
}

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params._id);

    res.no_content();
  } catch (err) {
    next(err);
  }
}
