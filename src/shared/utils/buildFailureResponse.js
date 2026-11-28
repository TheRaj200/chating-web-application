export const buildFailureResponse = (errorMessage, errorName, statusCode) => {
  return {
    status: false,
    message: errorMessage,
    name: errorName,
    statusCode,
  };
};