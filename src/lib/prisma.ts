import { PrismaClient } from "../../generated/prisma/client"; // our generated Prisma client
import { PrismaPg } from "@prisma/adapter-pg"; 
const globalForPrisma = global as unknown as {
  prisma: PrismaClient; 
}; 
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL, 
}); 
const prisma =
  globalForPrisma.prisma || // singleton pattern -> if instance exists, use it
  new PrismaClient({ // if not, create a new one
    adapter, 
  }); 
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma; 
export default prisma; 


/* this file does three things:
1. creates a single Prisma instance
2. connects it to the database
3. avoids multiple connections in dev
*/

/* Next.js uses hot reload, meaning every time we change code in a file and save it, Next.js detects that change and re-runs that file's code
this is done so we don't have to refresh the server manually every time
so we edit -> save -> get instant update
if we have new PrismaClient() in each file, every time that file is re-ran a new Prisma instance is created AKA a new DB connection
and the old connection is not cleaned fast enough which leads to connection overflow (DB connection limit reached)
by using global instead, we ensure we are reusing the same single connection every time
N.B.: this problem exists only in development; in production there's no hot reload*/

