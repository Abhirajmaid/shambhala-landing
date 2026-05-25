import { Router } from "express";
import { adminEmail, adminPassword, adminSessionToken } from "../config.js";

export const authRouter = Router();

authRouter.post("/login", (req, res) => {
  const { email, password } = req.body as { email?: string; password?: string };

  if (email === adminEmail && password === adminPassword) {
    res.json({
      token: adminSessionToken,
      user: { email: adminEmail, name: "Shambhala Admin" },
    });
    return;
  }

  res.status(401).json({ error: "Invalid email or password" });
});
