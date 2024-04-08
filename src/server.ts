import express, {NextFunction, Request, Response} from "express";
import cors from "cors";
import "express-async-errors";
import AppError from "./errors/AppError";
import routes from "./routes";

express()
    .use(express.json())
    .use(cors())
    .use("/api/v1", routes)
    .use((err: Error, req: Request, res: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return res.status(err.statusCode).json({
                status: "error",
                message: err.message,
            });
        }
        return res.status(500).json({
            status: "error",
            message: `Erro interno no Servidor - ${err.message}`,
        })
    })
    .listen(3000, () => {
        console.log(`API Rodando http://localhost:3000`)
    })