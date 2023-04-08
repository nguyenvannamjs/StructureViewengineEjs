import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

const initWebRoute = (app) => {
  app.router.get("/", homeController.getHomepage);
  router.get("/about", (req, res) => {
    res.send(
      "Hello my name is nam you can call me peter this is my english name "
    );
  });
  return app.use("/", router);
};

export default initWebRoute;
