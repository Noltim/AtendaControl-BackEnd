import {Router} from "express";
import senhasController from "../controller/senhasController";

const senhasRoutes = Router();

senhasRoutes.post("/", new senhasController().criarSenha);

export default senhasRoutes;