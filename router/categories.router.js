import { Router } from 'express';

const router = Router();

router.get('/:categoryId/products', (req, res) => {
  const { categoryId } = req.params;
  res.json({
    categoryId,
  });
});

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({ categoryId, productId });
});

export default router;
