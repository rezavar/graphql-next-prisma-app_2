import { PrismaClient } from '@prisma/client';
import { links } from './importData/links';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: 'admin@gmail.com',
      role: 'ADMIN',
    },
  });
  await prisma.user.create({
    data: {
      email: 'user@gmail.com',
      role: 'USER',
    },
  });

  await prisma.link.createMany({
    data: links,
  });
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
