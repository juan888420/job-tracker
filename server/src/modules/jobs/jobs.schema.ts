import { z } from "zod";

export const createJobSchema = z.object({
  company: z.string().min(1, "Company is required"),
  position: z.string().min(1, "Position is required"),
  status: z.enum(["APPLIED", "INTERVIEW", "REJECTED", "OFFER"]),
  location: z.string().optional(),
  salary: z.number().int().positive().optional(),
  notes: z.string().optional(),
  appliedDate: z.string().datetime({ offset: true }).or(z.string().date()),
});
