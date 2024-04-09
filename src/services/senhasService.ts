import senhasDTO from "../dto/senhaDTO";
import {Senha, Status, TipoSenha} from "@prisma/client";
import prismaClient from "../database/db";
import AppError from "../errors/AppError";


export default class senhasService {
    async criarSenha(tipoSenha: string): Promise<Senha> {

        // @ts-ignore
        if (!(Object.values(TipoSenha).includes(tipoSenha))) {
            throw new AppError("Bota uma senha válida ai po", 400);
        }


        return prismaClient.senha.create({
            data: {
                // @ts-ignore
                tipoSenha,
                dataHoraEmissao: new Date(),
            }
        });
    }


    async pegarSenhas(status: boolean) {

        const senhas = await prismaClient.senha.findMany(
            {
                where: {
                    statusAtendimento: status ? Status.ATENDIDO : Status.NA_FILA
                }
            }
        )

        const prioridades = {
            "SG": "Senha Geral",
            "SP": "Senha Prioritaria",
            "SE": "Senha Exame"
        }

        let payloadDefined: { nomeSenha: string; tempoNaFila: string; }[] = []

        for (const senha of senhas) {

            const difSec = Math.abs(senha.dataHoraEmissao.getTime() - new Date().getTime());
            const horas = Math.floor(difSec / (1000 * 60 * 60));
            const minutos = Math.floor(difSec / (1000 * 60)) % 60;
            const segundos = Math.floor(difSec / 1000) % 60;

            const payload = {
                nomeSenha: `${senha.tipoSenha}-${senha.id}`,
                tempoNaFila: `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`,
                prioridade: prioridades[senha.tipoSenha],
                dia: senha.dataHoraEmissao.getDay(),
                mes: senha.dataHoraEmissao.getMonth(),
                ano: senha.dataHoraEmissao.getFullYear(),
                status: senha.statusAtendimento,
            }

            if (status) {
                // @ts-ignore
                const difSecAtendido = senha.dataHoraAtendimento?.getTime() - senha.dataHoraEmissao?.getTime();
                const horas = Math.floor(difSecAtendido / (1000 * 60 * 60));
                const minutos = Math.floor(difSecAtendido / (1000 * 60)) % 60;
                const segundos = Math.floor(difSecAtendido / 1000) % 60;

                payload["tempoNaFila"] = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`

                // @ts-ignore
                payload["guiche"] = senha.guicheId

                // @ts-ignore
                payload["DataHoraAtendimento"] = `${senha.dataHoraAtendimento?.getHours()}:${senha.dataHoraAtendimento?.getMinutes()}:${senha.dataHoraAtendimento?.getSeconds()}`
            }

            payloadDefined.push(payload)
        }
        return payloadDefined;
    }
}