import controller from '../CONTROLLER/personcontroller.js';
import express from 'express';

const router = express.Router();

router.post('/users', controller.createUser);   
router.get('/users', controller.getAllUsers);
router.get('/users/:id', controller.getUserById);
router.put('/users/:id', controller.updateUser);
router.delete('/users/:id', controller.deleteUser);

export default router;