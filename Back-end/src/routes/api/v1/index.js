import { Router } from "express";
import * as IndexController from "../../../controllers/index.js";
export default (app) => {
  const router = Router();

  // prefix all routes
  app.use("/api/v1", router);

  router.get("/", IndexController.index);
};
