import { Request, Response } from "express";
import { AuthenticateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";


export class AuthenticateDeliverymanController {
    async handle(request: Request, response: Response) {
        const {username,  password } = request.body;

        const authenticateDeliverymanUsecase = new AuthenticateDeliverymanUseCase();
        const result =  await authenticateDeliverymanUsecase.execute({
            username,
            password,
        })

        return response.json(result)
    }
}