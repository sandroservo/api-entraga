import { prisma } from "../../../../database/prismaClient";
import{ hash } from "bcrypt"

interface ICreateClient {
    username: string;
    password: string
}

export class CreateClientUsecase {
    async execute({username, password}: ICreateClient) {
        //validar se o  client exite
        const clientExist = await prisma.clients.findFirst({
            where: {
                username:{
                    mode:"insensitive"
                }
            }
        })
        if(clientExist) {
            throw new Error("client already exists")
        }
       // criptografa a senha 
        const hashPassword = await hash(password, 10);

        //Salva o  client
        const  client = await prisma.clients.create({
            data: {
               username,
               password: hashPassword
            }
        });

        return client;
    }
}