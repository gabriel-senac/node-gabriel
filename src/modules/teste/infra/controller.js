import { connection } from "../../../connection.js";



export class Controller{
    async getTeste(request, response){
        try {
            const [rows] = await connection.query('SELECT * FROM venda');
            return response.status(200).json({data: rows});
        } catch (error) {
            console.log(error);
            return response.status(500).json({msg: "Erro interno do servidor"});
        }
    }

    async postTeste(request, response){
        const {variavel_teste} = request.body;
        if (variavel_teste == null || variavel_teste === '') {
            return response.status(400).json({message: "FALTOU DADO AE MACHO"});
        }

        try {
            return response.status(200).json({message: "Dado enviado: " + variavel_teste})
        } catch (error) {
            return response.status(500).json({message: "OPS... dado não enviado! "})
        }
    }

    async putTeste(request, response){
        const {variavel_teste} = request.body;
        if (variavel_teste == null || variavel_teste === '') {
            return response.status(404).json({message: "FALTOU DADO AE MACHO"});
        }

        try {
            return response.status(200).json({message: "Dado enviado: " + variavel_teste})
        } catch (error) {
            return response.status(500).json({message: "OPS... dado não enviado! "})
        }
    }

    async deleteTeste(request, response){
        const {variavel_teste} = request.body;
        if (variavel_teste == null || variavel_teste === '') {
            return response.status(400).json({message: "FALTOU DADO AE MACHO"});
        }

        try {
            return response.status(200).json({message: "Dado enviado: " + variavel_teste})
        } catch (error) {
            return response.status(500).json({message: "OPS... dado não enviado! "})
        }
    }

}