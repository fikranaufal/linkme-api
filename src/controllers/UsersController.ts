import { Request, Response } from "express";
import prisma from "../lib/prisma";
import bcrypt from "bcrypt";

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

            const hashedPassword = bcrypt.hashSync(password,10)
            const user = await prisma.user.create({
                data: {
                    name,
                    email,
                    username,
                    password: hashedPassword,
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

    async detailUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await prisma.user.findUnique({
                where: {
                    id,
                }
            });

            if (!user) {
                throw new Error("No user found");
            }

            res.json({
                status: "ok",
                code: 200,
                message: "Users fetched succesfully",
                data: user,
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

    async updateUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const updatedUser = req.body;

            if (updatedUser.password){
                const hashedPassword = bcrypt.hashSync(updatedUser.password,10);
                updatedUser.password = hashedPassword;
            }
            
            const user = await prisma.user.update({
                where: {
                    id
                },
                data: updatedUser,
            });

            res.json({
                status: "ok",
                code: 201,
                message: "Updated successfully",
                data: user,
            })
        } catch (error) {
            res.status(500).json({
                status: "error",
                code: 500,
                message: "Failed to updated user",
                error: error,
            });
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await prisma.user.delete({
                where: {
                    id,
                }
            });

            if (!user) {
                throw new Error("No user found");
            }

            res.json({
                status: "ok",
                code: 200,
                message: "Users deleted succesfully",
                data: user,
            });
        } catch (error) {
            res.status(500).json({
                status: "error",
                code: 500,
                message: "Failed to delete users",
                error: error,
            });
        }
    }
}

export default new UsersController();