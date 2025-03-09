import { Router } from "express";

import InternalServerError from "./routes/helper/500.js"
import NotFound from "./routes/helper/404.js";

import UserRoutes from "./routes/userRoutes.js";

const routes = Router()
  .use('/api/user', UserRoutes)
  .use(InternalServerError)
  .use(NotFound);

export default routes;
