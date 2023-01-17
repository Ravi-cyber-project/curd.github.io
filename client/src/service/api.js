import axios from 'axios';

const URL = 'http://localhost:8000';

export const addUser = async (data) =>{

    try{
        return await axios.post(`${URL}/add`, data)
    }
    catch(err){
        console.log('there is an arror' , err)
    }

}

export const getUsers = async () =>{
   
    try{
        return await axios.get(`${URL}/all`)
    }
    catch(err){
        console.log('Error while fatching data', err.message);
    }
    
}

export const getUser = async (id) =>{

    try{
        return axios.get(`${URL}/${id}`);
    }
    catch(err){
        console.log('Error while calling getUser API', err.message)
    }

};

export const editUser = async (data, id) =>{
    try{
        return axios.put(`${URL}/edit/${id}`, data);
    }
    catch(err){
        console.log('Error while calling editUser', err.message);
    }
}

export const deleteUser = async (id) =>{

    try{
        return await axios.delete(`${URL}/dele/${id}`);
    }
    catch(err){
        console.log('Error while calling deleteUser API', err.message);
    }

}
