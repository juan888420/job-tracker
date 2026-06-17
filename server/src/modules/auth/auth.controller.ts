import type { Request, Response } from "express";
import { loginSchema, registerSchema } from "./auth.schema";
import { register, EmailAlreadyExistsError, login, InvalidCredentialsError, getMe, UserNotFoundError } from "./auth.service";

export async function registerHandler(req: Request, res: Response): Promise<void> {
  const parsed = registerSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({
      message: "Validation error",
      errors: parsed.error.errors,
    });
    return;
  }

  try {
    const user = await register(parsed.data);
    res.status(201).json(user);
  } catch (error) {
    if (error instanceof EmailAlreadyExistsError) {
      res.status(409).json({ message: error.message });
      return;
    }
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function loginHandler(req: Request, res: Response): Promise<void> {
  const parsed = loginSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({
      message: "Validation error",
      errors: parsed.error.errors,
    });
    return;
  }

  try {
    const result = await login(parsed.data);
    res.status(200).json(result);
  } catch (error) {
    if (error instanceof InvalidCredentialsError) {
      res.status(401).json({ message: error.message });
      return;
    }
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function meHandler(req: Request, res: Response): Promise<void> {
  try {
    const user = await getMe(req.userId!);
    res.status(200).json(user);
  } catch (error) {
    if (error instanceof UserNotFoundError) {
      res.status(404).json({ message: error.message });
      return;
    }
    res.status(500).json({ message: "Internal server error" });
  }
}
