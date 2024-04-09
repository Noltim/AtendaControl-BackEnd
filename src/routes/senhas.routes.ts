import {Router} from "express";
import senhasController from "../controller/senhasController";

const senhasRoutes = Router();

senhasRoutes.post("/", new senhasController().criarSenha);
senhasRoutes.get("/nao-atendidas", new senhasController().senhasNaoAtendidas)
senhasRoutes.get("/atendidas", new senhasController().senhasAtendidas)
export default senhasRoutes;