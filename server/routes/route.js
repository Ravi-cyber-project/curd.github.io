import express from 'express';
import {addUser, getUsers, getUser, editUser, deleteUser} from '../controller/Usercontroller.js';


const router = express.Router();

router.post('/add', addUser);
router.get('/all', getUsers);
router.get('/:id', getUser);
router.put('/edit/:id', editUser);
router.delete('/dele/:id', deleteUser);

export default router;