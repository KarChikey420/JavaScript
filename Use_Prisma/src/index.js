import dotenv from "dotenv";
import { fileURLToPath } from "node:url";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

const envPath = fileURLToPath(new URL("../.env", import.meta.url));
dotenv.config({ path: envPath });

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is not set in .env");
}

const adapter = new PrismaPg({ connectionString });
export const prisma = new PrismaClient({ adapter });

async function upsertUser(email, username, password, firstName, lastName) {
  const user = await prisma.user.upsert({
    where: { email },
    update: { username, password, firstName, lastName },
    create: { email, username, password, firstName, lastName },
    select: {
      email: true,
      username: true,
      firstName: true,
      lastName: true,
    },
  });

  console.log(user);
}

upsertUser("test@example.com", "testuser", "password123", "Test", "User")
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
//# sourceMappingURL=index.js.map
