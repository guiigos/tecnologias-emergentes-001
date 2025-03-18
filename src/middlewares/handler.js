import httpStatus from "http-status";

export default (_, res, next) => {
  res.ok = (data) => res
    .status(httpStatus.OK)
    .json(data);

  res.internal_server_error = (message) => res
    .status(httpStatus.INTERNAL_SERVER_ERROR)
    .json({ message });

  next();
}
