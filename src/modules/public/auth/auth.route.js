import express from "express";
import AuthController from "./auth.controller.js";

const authController = new AuthController()
const router = express.Router();

export default router;