import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else if (limit || offset) {
    res.json({ limit, offset });
  } else {
    res.res.send('no hay parametros');
  }
});

export default router;
