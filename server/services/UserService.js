import ApiError from '../utils/errors.js';
class UserService {
    constructor(usermodel) {
        this.usermodel = usermodel;
    }

    createUser = async (userdata) => {
        if(!userdata.nome || !userdata.email || !userdata.senha) {
            throw ApiError.badRequest('All fields are required');
        }

        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(!regexEmail.test(userdata.nome)) {
            throw ApiError.badRequest('Invalid Email');
        }

        const u = await this.usermodel.findOne({email: userdata.email});

        if(u) {
            throw ApiError.badRequest('User already exists');
        }

        const user = new this.usermodel(userdata);

        try {
            await user.save();
            return user;
        } catch {
            throw ApiError.badRequest('Failed to create user');
        }
    }
}

export default UserService;