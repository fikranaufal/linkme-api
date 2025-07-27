import { Router } from "express";
import UsersController from "../controllers/UsersController";

const router = Router();
router.get("/", UsersController.getAllUsers);
router.post("/", UsersController.createUser);
router.get("/:id",UsersController.detailUser);
router.put("/:id", UsersController.updateUser);
router.delete("/:id",UsersController.deleteUser);

export default router;