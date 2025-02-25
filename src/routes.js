import { Router } from "express";

import InternalServerError from "./routes/helper/500.js"
import NotFound from "./routes/helper/404.js";

const routes = Router()
  .use(InternalServerError)
  .use(NotFound);

export default routes;
