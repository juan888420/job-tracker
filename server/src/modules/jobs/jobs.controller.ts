import type { NextFunction, Request, Response } from "express";
import { createJobSchema } from "./jobs.schema";
import { createJob } from "./jobs.service";

export async function createJobHandler(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const parsed = createJobSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({
      message: "Validation error",
      errors: parsed.error.errors,
    });
    return;
  }

  try {
    const job = await createJob({ ...parsed.data, userId: req.userId! });
    res.status(201).json(job);
  } catch (error) {
    next(error);
  }
}
