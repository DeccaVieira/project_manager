// prisma/seed.js
import { PrismaClient } from '../src/generated/prisma/index.js'; // ajuste se estiver usando outro caminho
const prisma = new PrismaClient();

async function main() {
  const firm = await prisma.firm.create({
    data: {
      name: "Acme Inc."
    },
  });

    // Inserir ocupações
  const occupations = [
    {
      name: 'Ajudante',
      description_of_occupation: 'Auxilia em tarefas diversas de obra e manutenção.',
      salary: 1800.0,
      dangerousness: false,
    },
    {
      name: 'Líder de manutenção',
      description_of_occupation: 'Coordena equipes e processos de manutenção preventiva e corretiva.',
      salary: 4500.0,
      dangerousness: false,
    },
    {
      name: 'Gasista de operações',
      description_of_occupation: 'Realiza instalação e manutenção de redes de gás em campo.',
      salary: 3200.0,
      dangerousness: true,
    },
    {
      name: 'Soldador',
      description_of_occupation: 'Executa soldagens em tubulações e estruturas metálicas.',
      salary: 3500.0,
      dangerousness: true,
    },
    {
      name: 'Encanador',
      description_of_occupation: 'Faz instalação e reparo de sistemas hidráulicos.',
      salary: 2800.0,
      dangerousness: false,
    },
    {
      name: 'Gasista de ligação',
      description_of_occupation: 'Efetua ligação de gás residencial e comercial.',
      salary: 3000.0,
      dangerousness: true,
    },
    {
      name: 'Encarregado civil',
      description_of_occupation: 'Responsável pela supervisão geral de obras civis.',
      salary: 5000.0,
      dangerousness: false,
    },
    {
      name: 'Pedreiro',
      description_of_occupation: 'Executa alvenaria, concretagem e acabamentos.',
      salary: 2600.0,
      dangerousness: false,
    },
    {
      name: 'Engenheiro',
      description_of_occupation: 'Planeja, supervisiona e executa projetos de engenharia.',
      salary: 9000.0,
      dangerousness: false,
    },
    {
      name: 'Vistoriador',
      description_of_occupation: 'Realiza vistorias técnicas em redes, obras e instalações.',
      salary: 3400.0,
      dangerousness: true,
    },
    {
      name: 'Técnico de segurança',
      description_of_occupation: 'Garante conformidade com normas de segurança no trabalho.',
      salary: 3700.0,
      dangerousness: false,
    },
  ];

  await prisma.occupation.createMany({ data: occupations, skipDuplicates: true });
  console.log('✅ Ocupações inseridas com sucesso!');

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
