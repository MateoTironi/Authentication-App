import { Router } from "express";
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, putUsuario } from "../controllers/user";

const router = Router();


router.get('/user/:id', getUsuario);
router.post('/user', postUsuario);
router.put('/user/:id', putUsuario);
router.delete('/user/:id', deleteUsuario);








export default router;