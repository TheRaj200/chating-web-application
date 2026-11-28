export default class NotFoundError extends Apperror {
    constructor(message, details="") {
        super(message);
        this.name = "NotFoundError";
        this.details = details;
    }
}