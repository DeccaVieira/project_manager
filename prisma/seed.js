// prisma/seed.js
import { PrismaClient } from '../src/generated/prisma/index.js'; // ajuste se estiver usando outro caminho
const prisma = new PrismaClient();

async function main() {
  const firm = await prisma.firm.create({
    data: {
      name: "Acme Inc."
    },
  });

  const user = await prisma.user.create({
    data: {
      name: "Decca Vieira",
      email: "andreiavieira2353@gmail.com",
      cpf: "12345676901",
      firmId: firm.id
    },
  });

  console.log("Seed concluído:");
  console.log({ firm, user });
}

main()
  .catch((e) => {
    console.error("Erro ao rodar seed:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
