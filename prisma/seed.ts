import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.message.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.user.create({
    data: {
      name: "Jack",
      messages: {
        create: [
          {
            body: "A Note for Jack",
          },
          {
            body: "Another note for Jack",
          },
        ],
      },
    },
  });
  await prisma.user.create({
    data: {
      name: "Sergio",
      messages: {
        create: [
          {
            body: "A Note for Sergio",
          },
          {
            body: "Another note for Sergio",
          },
        ],
      },
    },
  });
  await prisma.user.create({
    data: {
      name: "Alejandro",
      messages: {
        create: [
          {
            body: "A Note for Alejandro",
          },
          {
            body: "Another note for Alejandro",
          },
        ],
      },
    },
  });
}

main().then(() => {
  console.log("Data seeded");
});
