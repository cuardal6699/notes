import prisma  from "../../../lib/prisma";
import { NextApiRequest } from "next";
import { NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const noteId = req.query.id

    if(req.method === 'DELETE') {
        const note = await prisma.note.delete({
            where: {id: String(noteId)}
        })
        res.json(note)
    }else {
        console.log("Note could not be created");
    }
    
}