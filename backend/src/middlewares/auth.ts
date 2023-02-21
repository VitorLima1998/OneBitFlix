import { UserInstance } from "./../models/User";
import { NextFunction, Request, Response } from "express";
import { jwtService } from "./../services/jwtService";
import { userService } from "./../services/userService";
import { JwtPayload } from "jsonwebtoken";

export interface AuthenticatedRequest extends Request {
  user?: UserInstance | null;
}

export function ensureAuth(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const authorizationHeader = req.headers.authorization;

  // Obtendo o token do cabeçalho da requisição
  if (!authorizationHeader)
    return res.status(401).json({
      message: "Not authorized! No token was found.",
    });

  const token = authorizationHeader.replace(/Bearer /, ""); // removendo a palavra 'Bearer' que vem antes do token

  //   Decodificando o token
  jwtService.verifyToken(token, async (err, decoded) => {
    if (err || typeof decoded === "undefined")
      return res.status(401).json({
        message: "Not authorized! Invalid token.",
      });

    //   Após decodificar o token, é realizada uma busca no DB para ver qual user está tentando fazer login
    const user = await userService.findByEmail((decoded as JwtPayload).email);
    req.user = user;
    next();
  });
}

export function ensureAuthViaQuery(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const { token } = req.query;

  if (!token)
    return res.status(401).json({
      message: "Not authorized! Not token was found.",
    });

  if (typeof token !== "string")
    return res.status(400).json({
      messag: "the token parameter must be of type string",
    });

  jwtService.verifyToken(token, async (err, decoded) => {
    if (err || typeof decoded === "undefined")
      return res.status(401).json({
        message: "Not authorized! Invalid token.",
      });

    const user = await userService.findByEmail((decoded as JwtPayload).email);
    req.user = user;
    next();
  });
}
