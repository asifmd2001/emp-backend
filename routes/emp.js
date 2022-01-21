import express from 'express';

import { getEmp ,createEmp} from '../controllers/emp.js';

const router = express.Router();

router.get('/', getEmp);
router.post('/', createEmp);


export default router;
