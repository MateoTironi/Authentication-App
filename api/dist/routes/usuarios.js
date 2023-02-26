"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const router = (0, express_1.Router)();
router.get('/user/:id', user_1.getUsuario);
router.post('/user', user_1.postUsuario);
router.put('/user/:id', user_1.putUsuario);
router.delete('/user/:id', user_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuarios.js.map