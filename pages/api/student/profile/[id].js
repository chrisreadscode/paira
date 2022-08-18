import prisma from "../../../../utils/prisma";

export default async function handler(req, res) {
    const { id } = req.query;

    const student = await prisma.student.findUnique({
        where: {
            id: parseInt(id)
        }
    });

    if (student) res.status(200).json({...student});
    else res.status(404).json({data: "user not found"});
}
