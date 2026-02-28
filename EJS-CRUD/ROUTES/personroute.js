import controller from '../CONTROLLERS/personcontroller.js'

import express from 'express'

const router = express.Router() 
router.post('/add', controller.createprofile)
export default router;