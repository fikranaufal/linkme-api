import { Request, Response } from "express";
import prisma from "../lib/prisma"

class UsersController {
    async getAllUsers(req: Request, res: Response) {
        try {
            const users = await prisma?.user.findMany();

            res.json({
                status: "ok",
                code: 200,
                message: "Users fetched succesfully",
                data: users,
            });
        } catch (error) {
            res.status(500).json({
                status: "error",
                code: 500,
                message: "Failed to get users",
                error: error,
            });
        }
    } 
}

export default new UsersController();