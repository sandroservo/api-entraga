import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClienteControler";
import { AuthenticateDeliverymanController } from "./modules/account/AuthenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/CreateDeliveryController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCase/CreateDelirerymanController";


const routes =  Router();

//controllers
const createClientController =  new CreateClientController()
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController =  new CreateDeliverymanController();
const authenticateDeliverymanController =  new AuthenticateDeliverymanController();

const deliveryController =  new CreateDeliveryController();

//rota de autencação
routes.post('/client/authenticate', authenticateClientController.handle)
routes.post('/deliveryman/authenticate', authenticateDeliverymanController.handle)

//rota de criar client
routes.post("/client/", createClientController.handle);

//rota de 
routes.post("/deliveryman", createDeliverymanController.handle) 

//rota de delivery
routes.post("/delivery", deliveryController.handle)


export { routes };