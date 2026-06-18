import type { NextFunction, Request, Response } from "express";
import { loginSchema, registerSchema } from "./auth.schema";
import { register, login, getMe } from "./auth.service";

export async function registerHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
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
    next(error);
  }
}

export async function loginHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
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
    next(error);
  }
}

export async function meHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const user = await getMe(req.userId!);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}
