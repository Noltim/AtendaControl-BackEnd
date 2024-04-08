import {Router} from "express";
import senhasRoutes from "./senhas.routes";


const routes = Router();

routes.use("/senhas", senhasRoutes);

export default routes;