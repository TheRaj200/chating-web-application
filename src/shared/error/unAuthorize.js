export default class UnAuthorizedError extends AppError {

    constructor(message, details="") {
        super(message, 401, details);
        this.name = "UnAuthorizedError";
    }
}