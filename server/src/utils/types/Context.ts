import { Request, Response } from "express";

export interface ContextApollo {
  req: Request;
  res: Response;
}
