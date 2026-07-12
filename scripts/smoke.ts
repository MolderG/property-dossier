import pg from "pg";
import { createClient } from "redis";
import { loadEnv } from "../packages/infra/src/config/env.js";

const env = loadEnv();

async function smoke() {
	console.log("Testing Postgres connection...");
	const pgClient = new pg.Client({ connectionString: env.DATABASE_URL });
	try {
		await pgClient.connect();
		const result = await pgClient.query("SELECT 1");
		console.log("✓ Postgres OK");
	} finally {
		await pgClient.end();
	}

	console.log("Testing Redis connection...");
	const redisClient = createClient({ url: env.REDIS_URL });
	try {
		await redisClient.connect();
		await redisClient.ping();
		console.log("✓ Redis OK");
	} finally {
		await redisClient.quit();
	}

	console.log("\n✓ All systems operational");
}

smoke().catch((err) => {
	console.error("Smoke test failed:", err);
	process.exit(1);
});
