import prisma from '../lib/prisma/prisma';
async function main() {
  await prisma.user.create({
    data: {
      email: `info@icld.io`,
      role: 'ADMIN',
      name: 'Ian Lyles',
    },
  });
  // await prisma.user.create({
  //   data: {
  //     email: `ethanpiercepresents@gmail.com`,
  //     role: 'ADMIN',
  //     name: 'Ethan Pierce',
  //   },
  // });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
