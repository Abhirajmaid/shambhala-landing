import { Router } from "express";
import { createLead, listLeads, type LeadInput } from "../firebase.js";
import { requireAdmin } from "../middleware/auth.js";

export const leadsRouter = Router();

leadsRouter.post("/", async (req, res) => {
  try {
    const body = req.body as Partial<LeadInput>;
    const name = body.name?.trim();
    const phone = body.phone?.trim();
    const city = body.city?.trim();
    const email = body.email?.trim();
    const interest = body.interest?.trim();

    if (!name || !phone || !city || !email || !interest) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const id = await createLead({
      name,
      phone,
      city,
      email,
      interest,
      notes: body.notes?.trim() || "",
      whatsappUpdates: Boolean(body.whatsappUpdates),
    });

    res.status(201).json({ id, message: "Request submitted successfully" });
  } catch (err) {
    console.error("Create lead error:", err);
    const message =
      err instanceof Error && err.message.includes("NOT_FOUND")
        ? "Firestore is not enabled. Create a database in Firebase Console for project shambhala-59523."
        : "Failed to save request";
    res.status(500).json({ error: message });
  }
});

leadsRouter.get("/", requireAdmin, async (_req, res) => {
  try {
    const leads = await listLeads();
    res.json({ leads });
  } catch (err) {
    console.error("List leads error:", err);
    res.status(500).json({ error: "Failed to fetch requests" });
  }
});
