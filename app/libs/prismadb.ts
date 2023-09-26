import {PrismaClient} from "@prisma/client"

declare global {
  var prisma: Prisma Client | undefined
}

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.prisma = Client

  export default client 


  // creating this to make prisma client globally available 
