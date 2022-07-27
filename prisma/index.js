import prisma from '../lib/prisma.js';

async function main() {
    const allStudents = await prisma.student.findMany()
    console.log(allStudents)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })