import express from "express";
import upload from "../MIDDLEWARE/upload.js";

import {createprofile} from "./CONTROLLER/personcontroller.js";

const router = express.Router();

router.post('/add', upload.fields([
    {name: "profileImage", maxCount: 1},
    {name:"e-mail", maxCount: 1},
    {name:"phone", maxCount: 1},
    {name:"name", maxCount: 1},
    
]), 
createprofile);



