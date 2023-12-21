import { Router } from "express";
import { testesRouters } from "./modules/teste/infra/routes.js";



const router = Router();

router.use('/rotaPrincipal', testesRouters);

export default router;
