import { Request, Response } from "express";
import { AuthenticateClientUsecase } from "./AuthenticateClientUseCase";


export class AuthenticateClientController {
    async handle(request: Request, response: Response) {
        const {username,  password } = request.body;

        const authenticateClientUsecase = new AuthenticateClientUsecase();
        const result =  await authenticateClientUsecase.execute({
            username,
            password,
        })

        return response.json(result)
    }
}