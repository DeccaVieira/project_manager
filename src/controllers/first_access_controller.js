import firstAccessServices from "../services/first_access_service.js"

async function processFirstAccess(req, res) {
    const {email} = req.body;
    try {
        await firstAccessServices.processFirstAccess(email)
        return res.status(200).json({message:"Token Enviado com Sucesso!"})
    } catch (error) {
        console.log(error);
        
        return res.status(error.status || 400).json({message: error.message})
    }
}
const firstAccessController = {
    processFirstAccess,
}
export default firstAccessController;