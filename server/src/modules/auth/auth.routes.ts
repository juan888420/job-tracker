import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware";
import { loginHandler, meHandler, registerHandler } from "./auth.controller";

const router = Router();

router.post("/register", registerHandler);
router.post("/login", loginHandler);
router.get("/me", authenticate, meHandler);

export default router;
