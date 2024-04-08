import {Request, Response} from "express";
import senhasService from "../services/senhasService";


export default class senhasController {
    async criarSenha(req: Request, res: Response) {
        const {tipoSenha} = req.body;
        const senhaCriada = await new senhasService().criarSenha(tipoSenha);
        return res.status(201).json(senhaCriada);
    }

    
}