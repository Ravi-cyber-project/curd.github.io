import userModel from '../schema/Userschema.js';

export const addUser = async (req, resp) =>{
    const user = req.body;
    console.log(user);

    const newUser = new userModel(user);

    try{
        await newUser.save(); 
        resp.status(200).json(newUser); 
    }
    catch(err){
        resp.status(409).json({message : err.message});
    }
}

export const getUsers = async (req, resp) =>{
    try{
        const users = await userModel.find({});
        resp.status(200).json(users);
    }
    catch(err){
        resp.status(404).json({message : err.message})
    }
}

export const getUser = async (req, resp) =>{

    const id = req.params.id; 
    try{
        const user = await userModel.find({_id:id});
        resp.status(200).json(user);
    }
    catch(err){
        resp.status(404).json({message : err.message});
    }
}

export const editUser = async (req, resp) =>{

    const user = req.body;
    const newUser = new userModel(user);
    const id = req.params.id;
    try{
        const edit = await userModel.updateOne({_id:id}, newUser)
        resp.status(200).json(edit);
    }
    catch(err){
        resp.status(409).json({message: err.message});
    }
}

export const deleteUser = async (req, resp) =>{

    const id = req.params.id;
    try{
        await userModel.findOneAndDelete({_id:id});
        resp.status(200).json({message : 'user deleted Successfully'});
    }
    catch(err){
        resp.status(304).json({message:err.message});
    }
}