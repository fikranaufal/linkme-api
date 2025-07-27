import { Request, Response } from "express";
import prisma from "../lib/prisma"

class UsersController {
    async getAllUsers(req: Request, res: Response) {
        try {
            const users = await prisma.user.findMany();

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

    async createUser(req: Request, res : Response) {
        try {
            const { name, email, username, password } = req.body;
            const user = await prisma.user.create({
                data: {
                    name,
                    email,
                    username,
                    password,
                },
            });

            res.json({
                status: "ok",
                code: 201,
                message: "User created successfully",
                data: user,
            })
        } catch (error) {
            res.status(500).json({
                status: "error",
                code: 500,
                message: "Failed to create user",
                error: error,
            });
        }
    }
}

export default new UsersController();