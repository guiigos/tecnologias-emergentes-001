import { Router } from "express";

import InternalServerError from "./routes/helper/500.js"
import NotFound from "./routes/helper/404.js";

import UserRouter from "./routes/userRouter.js";

const api = Router()
  .use("/users/", UserRouter);

const routes = Router()
  .use("/api/", api)
  .use(InternalServerError)
  .use(NotFound);

export default routes;
