import { Router } from "express";

import ensureAuthenticated from "@modules/users/infra/http/middlewares/ensureAuthenticated";
import RoutinesController from "../controllers/RoutinesController";

const routinesRouter = Router();
const routinesController = new RoutinesController();

routinesRouter.use(ensureAuthenticated)

routinesRouter.post("/", routinesController.create);

export default routinesRouter;