import express, { NextFunction, Request, Response } from "express";
import { PORT } from "./config";
import cors from "cors";
import sampleRouter from "./routes/sample.router"

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use(`/sample`, sampleRouter);

// middleware error

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(400).send(err.message);
});

app.listen(8000, () => {
    console.log(`Server running on PORT : ${PORT}`); 
});