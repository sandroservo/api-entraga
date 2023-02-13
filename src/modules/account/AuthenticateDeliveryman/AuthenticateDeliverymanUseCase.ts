import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";


interface IAuthenticateDeliveryman{
  username: string;
  password: string

}

export class AuthenticateDeliverymanUseCase{
    async execute({username, password }: IAuthenticateDeliveryman) {
      //receber username e  password
      
      //Verificar se username cadastrado

      const deliveryman= await prisma.deliveryman.findFirst({
        where:{
          username,
        },
      })
      if(!deliveryman){
        throw new Error("Username or password invalid!")
      }
      //Verificar se a senha corresponde ao username
      const passwordMatch =  await compare(password, deliveryman.password);

      if(!passwordMatch){
        throw new Error("Username or password invalid!")
      }

      // gerar p  teken

      const token =  sign({username},"bd9fbf3a97a33b02d4fb49db20dd6f77", {
        subject: deliveryman.id,
        expiresIn: "1d"
      })

      return token;
    }
}