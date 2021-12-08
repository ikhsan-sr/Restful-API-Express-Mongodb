import express from 'express';
import { getProducts, saveProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id');
router.post('/', saveProduct );
router.patch('/');
router.delete('/');

export default router;
