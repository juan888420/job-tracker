import bcrypt from "bcrypt";
import prisma from "../../lib/prisma";
import { signToken } from "../../lib/jwt";
import type { LoginInput, RegisterInput } from "./auth.types";

export class EmailAlreadyExistsError extends Error {
  statusCode = 409;
}

export class InvalidCredentialsError extends Error {
  statusCode = 401;
}

export class UserNotFoundError extends Error {
  statusCode = 404;
}

export async function register(input: RegisterInput) {
  const existing = await prisma.user.findUnique({
    where: { email: input.email },
  });

  if (existing) {
    throw new EmailAlreadyExistsError("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(input.password, 10);

  const user = await prisma.user.create({
    data: {
      email: input.email,
      password: hashedPassword,
      name: input.name,
    },
  });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
}

export async function login(input: LoginInput) {
  const user = await prisma.user.findUnique({
    where: { email: input.email },
  });

  if (!user) {
    throw new InvalidCredentialsError("Invalid email or password");
  }

  const passwordValid = await bcrypt.compare(input.password, user.password);

  if (!passwordValid) {
    throw new InvalidCredentialsError("Invalid email or password");
  }

  const token = signToken(user.id);

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  };
}

export async function getMe(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new UserNotFoundError("User not found");
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
}
