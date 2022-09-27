import { Router } from "express";
import defaultRoutes from "./default.router.js";
import productRoutes from "./products.router.js";
// import usersRoutes from "./users.router.js";
// import categoriesRoutes from "./categories.router.js";

const routerAPI = (app) => {
  const router = Router();

  app.use("/", defaultRoutes);
  app.use("/api/", router);

  router.use("/", defaultRoutes);
  router.use("/products", productRoutes);
};

export default routerAPI;
