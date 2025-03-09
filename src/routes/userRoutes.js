import { Router } from "express";

import validator from "../middlewares/validator.js";
import userValidator from "./userValidator.js";

import {
  listUsers,
  showUser,
  createUser,
  editUser,
  deleteUser,
} from "../controllers/userController.js";

const router = Router();
router.get("/", listUsers);
router.get("/:_id", showUser);
router.post("/", validator(userValidator), createUser);
router.put("/:_id", validator(userValidator), editUser);
router.delete("/:_id", deleteUser);

export default router;
