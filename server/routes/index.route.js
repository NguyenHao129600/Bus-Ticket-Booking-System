import express from 'express';
import userRoutes from './user.route';
import roleRoutes from './role.route';
import busCompanyRoutes from './busCompany.route';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/roles', roleRoutes);
router.use('/bus-companies', busCompanyRoutes);

export default router;