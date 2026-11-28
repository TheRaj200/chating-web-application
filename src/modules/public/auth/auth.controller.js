import AuthService from "./auth.service.js";

export default class AuthController {
    constructor() { 
        // has a relation
        this.authService = new AuthService();
    }
}