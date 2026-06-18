import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware";
import { createJobHandler } from "./jobs.controller";

const router = Router();

router.post("/", authenticate, createJobHandler);

export default router;
