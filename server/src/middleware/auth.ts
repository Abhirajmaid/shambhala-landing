import type { NextFunction, Request, Response } from "express";
import { adminSessionToken } from "../config.js";

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  const token = header?.startsWith("Bearer ") ? header.slice(7) : null;

  if (token && token === adminSessionToken) {
    next();
    return;
  }

  res.status(401).json({ error: "Unauthorized" });
}
