import { Request, Response } from "express";
import prisma from "../lib/prisma";

class LinkController {
    async getAllLinks(req:Request, res:Response) {
        try {
            const links = await prisma.link.findMany()
            
            res.json ({
                status : "ok",
                code : 200,
                message : "Links fetched succesfully",
                data : links
            })
        } catch (error) {
            res.status(500).json({
                status : "error",
                code : 500,
                message : "Failed to get links",
                error
            })
        }
    }

    async createLink(req:Request, res: Response) {
        try {

        } catch {

        }
    }

    async detailLink(req:Request, res:Response) {
        try {

        } catch {

        }
    }

    async updateLink(req:Request, res:Response) {
        try {

        } catch {
            
        }
    }

    async deleteLink(req:Request, res: Response) {

    }
}

export default new LinkController 