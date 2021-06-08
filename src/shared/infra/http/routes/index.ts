import { Router } from "express";

import routinesRouter from "@modules/routines/infra/http/routes/routines.routes";
import usersRouter from "@modules/users/infra/http/routes/users.routes";
import sessionsRouter from "@modules/users/infra/http/routes/sessions.routes";
import passwordRouter from "@modules/users/infra/http/routes/password.routes";

const routes = Router();

routes.use("/routines", routinesRouter)
routes.use("/users", usersRouter)
routes.use("/sessions", sessionsRouter)
routes.use("/password", passwordRouter)

export default routes;