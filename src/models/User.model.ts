import {Schema, model} from "mongoose";
import {EGenders} from "../types/user.types";

const userSchema = new Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
        unique: true,
        require: [true, "Email is required"],
        trim:true,
        lowerCase: true
    },
    password:{
        type: String,
        require: [true, "Password is required"],
    },
    gender:{
        type: String,
        enum: EGenders,
    }
})
export const User = model('user', userSchema)