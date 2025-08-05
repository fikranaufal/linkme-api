import { Router } from "express";
import LinkController from "../controllers/LinkController";

const router = Router();

router.get("/", LinkController.getAllLinks);
router.post("/", LinkController.createLink);
router.get("/:id",LinkController.detailLink);
router.put("/:id", LinkController.updateLink);
router.delete("/:id",LinkController.deleteLink);

export default router;