import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import Routes from './routes/route.js';



const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
const URI_User = process.env.DB_USERNAME;
const Password = process.env.PASSWORD;

Connection(URI_User, Password);


app.use('/', Routes);



app.listen(8000, ()=>{
    console.log("Server is running on port now.",8000)
})