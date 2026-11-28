import mongoose from "mongoose";

const userSchema = {
    name:{type:String, required:true , trim:true},
    email:{type:String, required:true , trim:true, unique:true},
    password:{type:String},
}

const userModel = mongoose.model("user", userSchema);

export default userModel;