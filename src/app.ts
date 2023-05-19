import "reflect-metadata";
import express from "express";
import "express-async-errors";
import userRouter from "./router/products.routes";

import { Request, Response, NextFunction } from "express";
import { AppError } from "./errors/appError";

const app = express();

app.use(express.json());

app.use("/products", userRouter);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

export default app;
