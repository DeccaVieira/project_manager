import { PrismaClient } from '../generated/prisma/index.js'; // ou '@prisma/client' se usar o padrão
const prisma = new PrismaClient();
export default prisma;