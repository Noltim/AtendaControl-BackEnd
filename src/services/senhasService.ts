import senhasDTO from "../dto/senhaDTO";
import {Senha, tipoSenha} from "@prisma/client";
import prismaClient from "../database/db";
import AppError from "../errors/AppError";


export default class senhasService {
    async criarSenha({
                         tipoSenhaRecebida,
                     }: senhasDTO): Promise<Senha> {

        if (tipoSenhaRecebida === undefined) {
            tipoSenhaRecebida = tipoSenha.SG;
        }

        return prismaClient.senha.create({
            data: {
                tipoSenha: tipoSenhaRecebida,
                dataHoraEmissao: new Date(),
            }
        });
    }


}