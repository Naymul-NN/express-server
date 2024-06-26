
import { Schema, model } from "mongoose";
import { Tuser } from "./user.interface";

const userSchema = new Schema<Tuser>({
    id : {
        type : String,
        required: true,
    },
    password: {
        type : String,
        required: true,
    },
    needsPsswordChange : {
        type : Boolean,
        default: true,
    },
    role: {
        type : String,
        enum:['student', 'facalty', 'admin' ]
    },
    status:{
        type: String,
        enum: ['in-progress', 'blocked'],
        default: 'in-progress'
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },

},
{
    timestamps:true
});

export const User = model<Tuser>('user', userSchema);