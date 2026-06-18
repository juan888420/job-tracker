import type { z } from "zod";
import type { createJobSchema } from "./jobs.schema";

export type CreateJobInput = z.infer<typeof createJobSchema>;
