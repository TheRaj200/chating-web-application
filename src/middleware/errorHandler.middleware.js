import { StatusCodes } from "http-status-codes";
import { buildFailureResponse } from "../shared/utils/buildFailureResponse.js";

const errorHandler = (err, req, res, next) => {
const errorMessage = err.message;
const errorName = err.name ;
const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;


buildFailureResponse(res,errorMessage, statusCode);
}

export default errorHandler;