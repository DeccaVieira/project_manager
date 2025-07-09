import prisma from "../database/prismaClient.js"


async function findEmail(email) {
  return prisma.user.findUnique({
    where: {
      email,    
      },
    });
}
 async function generateToken (userId, token, expiresAt) {
  return prisma.token.create({
    data : {
      token,
      userId,
      expiresAt}
    })
  }
 


const firstAccessRepositories = {
    findEmail, generateToken
}

export default firstAccessRepositories;