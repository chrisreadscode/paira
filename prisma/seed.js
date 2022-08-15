const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const joey = await prisma.student.upsert({
        where: { email: 'joey@joey.joey'},
        update: {},
        create: {
            age: 20,
            email: 'joey@joey.joey',
            firstName: 'Joey',
            gradeLevel: 14,
            lastName: 'Park',
            location: 'San Diego',
            password: 'pass',
            school: 'Boston University',
            why: 'Sample'
        }
    })

    const chris = await prisma.student.upsert({
        where: { email: 'chris@chris.chris'},
        update: {},
        create: {
            age: 27,
            email: 'chris@chris.chris',
            firstName: 'Chris',
            gradeLevel: 100,
            lastName: 'Read',
            location: 'Boston',
            password: 'pass',
            school: 'Harvard University',
            why: 'Sample'
        }
    })

    console.log({ joey, chris })
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