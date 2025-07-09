import firstAccessRepositories from "../repositories/first_access_repository.js"
import sendEmail from "../config/mail_transporter.js"


async function processFirstAccess(email){
   function generate6DigitToken() {
     return Math.floor(100000 + Math.random() * 900000).toString(); // garante 6 dígitos
   } 
   const token = generate6DigitToken();
   const expiresAt = new Date(Date.now() + 60 * 60 * 1000);
try {
   const emailExists = await firstAccessRepositories.findEmail(email)
   console.log("emailExists:", emailExists);
   if(emailExists === null){
    throw new Error ("Email não cadastrado")}
    
    await firstAccessRepositories.generateToken(emailExists.id, token, expiresAt)
    await sendEmail(email, token)
    
   return emailExists
} catch (error) {
     throw error
}

}

const firstAccessServices = {
   processFirstAccess,
}

export default firstAccessServices;