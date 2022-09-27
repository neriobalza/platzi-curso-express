import express from "express";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors";

// Router
import router from "./router/router.js";

// Middlewares
import {
  logErrors,
  errorHandler,
  boomErrorHandler,
} from "./middlewares/error.handler.js";

// App
const app = express();
// Vars
const port = process.env.PORT || 3000;
// Cors Options
const whiteList = ["http://localhost:3000"];
const corsOptions = {
  origin: (origin, callback) => {
    if (process.env.NODE_ENV === "development") {
      if (whiteList.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("no permitido"));
      }
    } else {
      if (whiteList.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("no permitido"));
      }
    }
  },
};

// Morgan
app.use(morgan("dev"));
// Json Middleware
app.use(express.json());
// Cors
app.use(cors(corsOptions));
// Router App
router(app);
// Error Middlewares
// app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// Listen
app.listen(port);
