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
        const {produto, preco, quantidade, dataVenda} = request.body;

        try {
            const [rows] = await connection.query('INSERT INTO venda(produto, preco, quantidade, datavenda) VALUES (?,?,?,?)', [produto, preco, quantidade, dataVenda]);
            return response.status(200).json({message: "Produto criado com sucesso! "})
        } catch (error) {
            return response.status(500).json({message: "OPS... produto não foi criado! "})
        }
    }

    async putTeste(request, response){
        const {idvenda, produto, preco, quantidade, dataVenda} = request.body;

        try {
            const [rows] = await connection.query('UPDATE venda SET produto=?, preco=?, quantidade=?, datavenda=? WHERE idvenda=?', [produto, preco, quantidade, dataVenda, idvenda]);
            return response.status(200).json({message: "Venda atualizada com sucesso!!! " })
        } catch (error) {
            return response.status(500).json({message: "OPS... venda não atualizada! "})
        }
    }

    async deleteTeste(request, response){
        const {idvenda} = request.body;

        try {
            const [rows] = await connection.query('DELETE FROM venda WHERE idvenda=?', [idvenda]);
            return response.status(200).json({message: "Venda excluída com sucesso!"})
        } catch (error) {
            return response.status(500).json({message: "OPS... venda não excluída! "})
        }
    }

}