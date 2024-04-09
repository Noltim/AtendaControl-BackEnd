import {Guiche, Status, TipoSenha} from "@prisma/client";

export default interface senhasDTO {
    id?: number
    tipoSenha?: string
    dataHoraEmissao?: Date
    dataHoraAtendimento?: Date
    statusAtendimento?: Status
    guiche?: Guiche
}

