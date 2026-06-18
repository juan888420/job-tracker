import type { Request, Response, NextFunction } from "express";

interface AppError extends Error {
  statusCode: number;
}

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  if ("statusCode" in err) {
    const appError = err as AppError;
    res.status(appError.statusCode).json({ message: err.message });
  } else {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}
