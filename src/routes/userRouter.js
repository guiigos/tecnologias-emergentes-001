import { Router } from "express";

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
router.post("/", createUser);
router.put("/:_id", editUser);
router.delete("/:_id", deleteUser);

export default router;
