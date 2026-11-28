import express from "express";
import env from "./config/env.js";
import morgan from "morgan";
import securityMiddleware from "./middleware/Security.middleware.js";
import notFound from "./middleware/notFound.middleware.js";
import errorHandler from "./middleware/errorHandler.middleware.js";
import authRoute from "./modules/public/auth/auth.route.js";

export default function createApp() {
  const app = express();
  
  if(env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }

  securityMiddleware(app)

  app.get("/health",(req,res)=>{
    res.json({
      message: "Server is healthy",
      uptime: process.uptime(),
      status:true,
    })
  })

app.use("/api/auth",authRoute);


 app.use(notFound);
 app.use(errorHandler);
  return app;
}
