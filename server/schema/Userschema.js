import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : String
    }
})

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');

const userModel = mongoose.model('User', userSchema);

export default userModel;