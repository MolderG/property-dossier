import { z } from "zod";

const EnvSchema = z.object({
	DATABASE_URL: z.string().url(),
	REDIS_URL: z.string().url(),
	OPENROUTER_API_KEY: z.string().min(1).optional(), // only needed from week 4 on
	NODE_ENV: z
		.enum(["development", "test", "production"])
		.default("development"),
});

export type Env = z.infer<typeof EnvSchema>;
export const loadEnv = (): Env => EnvSchema.parse(process.env);
