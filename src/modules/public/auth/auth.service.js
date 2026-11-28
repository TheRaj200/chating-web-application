import UserRepo from "../../../repository/user.repository.js";
import env from "../../../config/env.js";
import UnAuthorizedError from "../../../shared/error/unAuthorize.js";

export default class AuthService {
    constructor() {
        const userRepository = new UserRepo();
    }

    async RefershAccessToken(refreshToken) {
        if(!refreshToken) {
            throw new UnAuthorizedError("Refresh token is expired");
        }

        const playload = jwt.verify(refreshToken, env.JWT_REFRESH_SECRET);
        const accessToken = jwt.sign({ id: playload.id }, env.JWT_ACCESS_SECRET, { expiresIn: env.JWT_ACCESS_EXPIRE });
        
       return {accessToken};
    }

     async CreateUser(user){

        }
}