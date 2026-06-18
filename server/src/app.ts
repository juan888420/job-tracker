import express from "express";
import authRoutes from "./modules/auth/auth.routes";
import jobsRoutes from "./modules/jobs/jobs.routes";

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobsRoutes);

export default app;
