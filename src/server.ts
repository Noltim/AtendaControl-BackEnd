import prismaClient from "./database/db";
import express from "express";
import cors from "cors";


express()
.use(express.json())
.use(cors())
.listen(3000, () => {console.log("API rodando")})

/*async function criarGiche() {
    try {    
        const novoGiche = await prismaClient.guiche.create({
          data: {
            statusDisponibilidade: 'Disponível',
          },
        });
        console.log('Giche criado:', novoGiche);
      } catch (error) {
        console.error('Erro ao criar a senha:', error);
      } finally {
        await prismaClient.$disconnect();
      }
}

criarGiche();
*/


async function buscarSenhasDoGuiche() {
    const guicheId = 1;
    const senhasDoGuiche = await prismaClient.senha.findMany({
        where: {guicheId:guicheId}
    });
    console.log(senhasDoGuiche);
}

buscarSenhasDoGuiche();

/*
async function criarSenha() {
    try {
      const guicheId = 1; // Substitua pelo ID do guichê desejado
  
      const novaSenha = await prismaClient.senha.create({
        data: {
          tipoSenha: 'senha_normal',
          dataHoraEmissao: new Date(),
          statusAtendimento: 'pendente',
          guicheId: guicheId,
        },
      });
      console.log('Senha criada:', novaSenha);
    } catch (error) {
      console.error('Erro ao criar a senha:', error);
    } finally {
      await prismaClient.$disconnect();
    }
  }
  
  criarSenha();
  */