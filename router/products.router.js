import { Router } from "express";
// Services
import ProductService from "../services/products.service.js";
// Validate information
import validatorHandler from "../middlewares/validator.handler.js";
// Schemas
import {
  createProductSchema,
  updatePutProductSchema,
  updatePathProductSchema,
  idSchema,
} from "../schemas/products.schema.js";

// Router & Services
const router = Router();
const service = new ProductService();

// ***Routes***

// *Create new product
router.post(
  "/",
  validatorHandler(createProductSchema, "body"),
  async (req, res) => {
    try {
      const data = req.body;
      const newProduct = await service.create(data);
      res.status(201).json({ message: "Product created", data: newProduct });
    } catch (error) {}
  }
);

// *Get all products
router.get("/", async (req, res) => {
  const products = await service.get();
  res.status(200).json({
    result: products,
  });
});

// *Get product by id
router.get(
  "/:id",
  validatorHandler(idSchema, "params"),
  async (req, res, next) => {
    try {
      let { id } = req.params;
      const product = await service.find(parseInt(id, 10));
      res.status(200).json({ result: product });
    } catch (error) {
      next(error);
    }
  }
);

// *Update product by id
router.put(
  "/:id",
  validatorHandler(updatePutProductSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const productUpdated = await service.update(id, data);
      res.status(201).json({
        message: "Product updated",
        data: productUpdated,
      });
    } catch (error) {
      next(error);
    }
  }
);

// *Update partial product by id
router.patch("/:id", async (req, res) => {
  // const { id } = req.params;
  // const body = req.body;
  // const product = service.update(id, body);
  // res.status(201).json({
  //   message: 'Product updated',
  //   product,
  // });
});

// *Delete partial product by id
router.delete(
  "/:id",
  validatorHandler(idSchema, "params"),
  async (req, res, next) => {
    try {
    } catch (error) {
      next(error);
    }
    // const { id } = req.params;
    // const product = service.delete(id);
    // res.json({
    //   message: 'Product deleted',
    //   product,
    // });
  }
);

export default router;
