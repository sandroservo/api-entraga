import { Request, Response } from "express";
import { CreateClientUsecase } from "./CreateClientUseCase";


export class CreateClientController {
    async handle (request: Request, response: Response) {
        const{username, password} = request.body;

        const CreateClientUseCase =  new CreateClientUsecase();
        const result = await CreateClientUseCase.execute({
            username,
            password
        });

        return response.json(result);
    }
}
