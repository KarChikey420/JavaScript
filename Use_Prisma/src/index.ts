import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is not set in .env");
}

const adapter = new PrismaPg({ connectionString });

export const prisma = new PrismaClient({ adapter });


async function insertUser(email:string,username:string,password:string,firstName:string,lastName:string){
   const user = await prisma.user.create({
    data:{
      email,
      username,
      password,
      firstName,
      lastName
    },
    select:{
      email:true,
      password:true
    }
   })
   console.log(user);
}