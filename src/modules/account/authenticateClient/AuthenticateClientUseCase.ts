import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";


interface IAuthenticateclient{
  username: string;
  password: string

}

export class AuthenticateClientUsecase{
    async execute({username, password }: IAuthenticateclient) {
      //receber username e  password
      
      //Verificar se username cadastrado

      const client = await prisma.clients.findFirst({
        where:{
          username,
        },
      })
      if(!client){
        throw new Error("Username or password invalid!")
      }
      //Verificar se a senha corresponde ao username
      const passwordMatch =  await compare(password, client.password);

      if(!passwordMatch){
        throw new Error("Username or password invalid!")
      }

      // gerar p  teken

      const token =  sign({username},"bd9fbf3a97a33b02d4fb49db20dd6fb8", {
        subject: client.id,
        expiresIn: "1d"
      })

      return token;
    }
}