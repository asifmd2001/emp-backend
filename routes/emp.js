import express from 'express';

import { getEmp ,createEmp , updateEmp,deleteEmp} from '../controllers/emp.js';

const router = express.Router();

router.get('/', getEmp);
router.post('/', createEmp);
router.patch('/:id' ,updateEmp);
router.delete('/:id', deleteEmp);

export default router;
