import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    info: {
      author: "Nerio Balza",
      name: "Curso de Backend con Node: API REST con Express.js",
      description: "Esta es una API REST hecha con Express.js",
      website: "https://example.com/",
      docs: "https://example.com/documentation",
    },
    endpoints: {
      products: "https://example.com/api/products",
    },
  });
});

export default router;

// Parametros Query
// api.example.com/products?page=1
// api.example.com/products?limit=1&offset=0
// api.example.com/products?region=USA
// api.example.com/products?region=USA&brand=XYZ
