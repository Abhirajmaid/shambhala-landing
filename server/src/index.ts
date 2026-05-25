import cors from "cors";
import express from "express";
import { clientOrigin, port } from "./config.js";
import { authRouter } from "./routes/auth.js";
import { leadsRouter } from "./routes/leads.js";

const app = express();

app.use(
  cors({
    origin: clientOrigin,
    credentials: true,
  }),
);
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.use("/api/auth", authRouter);
app.use("/api/leads", leadsRouter);

app.listen(port, () => {
  console.log(`Shambhala API running on http://localhost:${port}`);
});
