import {Guiche, Status, tipoSenha} from "@prisma/client";

export default interface senhasDTO {
    id?: number
    tipoSenhaRecebida?: tipoSenha
    dataHoraEmissao?: Date
    dataHoraAtendimento?: Date
    statusAtendimento?: Status
    guiche?: Guiche
}

export default interface payloadPainel {
    
}