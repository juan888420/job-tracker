import prisma from "../../lib/prisma";
import type { CreateJobInput } from "./jobs.types";

export async function createJob(input: CreateJobInput & { userId: string }) {
  const job = await prisma.jobApplication.create({
    data: {
      company: input.company,
      position: input.position,
      status: input.status,
      location: input.location,
      salary: input.salary,
      notes: input.notes,
      appliedDate: new Date(input.appliedDate),
      userId: input.userId,
    },
  });

  return job;
}
