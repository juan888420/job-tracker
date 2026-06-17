import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET ?? (() => {
  throw new Error("JWT_SECRET is not defined");
})();

export function signToken(userId: string): string {
  return jwt.sign({ userId }, SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET) as { userId: string };
}
