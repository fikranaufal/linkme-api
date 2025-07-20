import { PrismaClient } from "@prisma/client"
import { omit } from "zod/v4/core/util.cjs"

// add prisma to the NodeJS global type
declare global {
    var prisma: PrismaClient | undefined
}

const prisma
    = global.prisma
        || new PrismaClient()

if (process.env.NODE_ENV === "development") {
    global.prisma = prisma
}

export default prisma