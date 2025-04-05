import * as http from 'http';
require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middleware/error";
import userRouter from "./routes/user.route";
import courseRouter from "./routes/course.route";
import orderRouter from "./routes/order.route";
import notificationRouter from "./routes/notification.route";
import analyticsRouter from "./routes/analytics.route";
import layoutRouter from "./routes/layout.route";
import { rateLimit } from 'express-rate-limit'

// body parser
app.use(express.json({ limit: "50mb" }));

// cookie parser
app.use(cookieParser());

// cors => cross origin resource sharing
// origin: process.env.ORIGIN,
const allowedOrigins = [
    'http://localhost:3000',
    'https://e-learn-6ec9156b59c3.herokuapp.com',
    'https://e-learn-client.vercel.app' // if using Vercel or other frontend
  ];
  
  app.use(
    cors({
      origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("CORS not allowed for this origin: " + origin));
        }
      },
      credentials: true,
    })
  );
  
// app.use(cors({ origin: process.env.ORIGIN, credentials: true, }))

// api requests limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
})

// routes
app.use(
    "/api/v1",
    userRouter,
    orderRouter,
    courseRouter,
    notificationRouter,
    analyticsRouter,
    layoutRouter
);

// testing api
app.get("/test", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        succcess: true,
        message: "API is working",
    });
});

// unknown route
app.all("*", (req: Request, res: Response, next: NextFunction) => {
    const err = new Error(`Route ${req.originalUrl} not found`) as any;
    err.statusCode = 404;
    next(err);
});

// middleware calls
app.use(limiter);
app.use(ErrorMiddleware);
