import { prisma } from "../../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateDeliveryman {
    username: string,
    password: string,
}

export class CreateDeliverymanUseCase {
    async execute({username, password}: ICreateDeliveryman){
        const delirevrymanExists = await prisma.deliveryman.findFirst({
            where: {
                username: {
                    mode:"insensitive",
                },
            },
        });

        if(delirevrymanExists){
            throw new Error("Deliveryman already exists");
        }
        //criptografa senha
        const hashPassword = await hash(password, 10);

        // Salva Delivey man
        const deliveryman =  await prisma.deliveryman.create({
            data:{
                username,
                password: hashPassword,
            }
        });

        return deliveryman;
    }

}