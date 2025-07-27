import { Router } from "express";
import UsersController from "../controllers/UsersController";

const router = Router();
router.get("/", UsersController.getAllUsers);
router.post("/", UsersController.createUser);

export default router;