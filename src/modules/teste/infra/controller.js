export class Controller{
    async getTeste(request, response){
        try {
            //const [rown] = await RTCPeerConnection.query
            return response.status(200).json({testeMsg: "Msg de teste"});
        } catch (error) {
            console.log(error);
            return response.status(500).json({msg: "Erro interno do servidor"});
        }
    }

}