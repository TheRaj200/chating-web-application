export default class Apperror extends Error {
    constructor(message, statusCode, details="") {
        super(message);
        this.statusCode = statusCode;
        this.details = details;
        this.name = "Apperror";
    }
}