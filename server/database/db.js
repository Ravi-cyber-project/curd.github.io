import mongoose from 'mongoose';



const Connection = async (user, Pass) =>{
    
    const URL = `mongodb+srv://${user}:${Pass}@cluster0.imbuwfp.mongodb.net/CURD?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology : true});
        console.log("database is connected successfully");
    }
    catch(err){
        console.log('Error while connecting database', err)
    }
}

export default Connection;