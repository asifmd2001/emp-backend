import express from 'express';

import { getEmp ,createEmp , updateEmp} from '../controllers/emp.js';

const router = express.Router();

router.get('/', getEmp);
router.post('/', createEmp);
router.patch('/:id' ,updateEmp);

export default router;
