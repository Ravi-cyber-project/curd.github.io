import styled from '@emotion/styled'
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material'
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import {editUser, getUser} from '../service/api';
import {useNavigate} from 'react-router-dom';

const Edituser = () => {

  useEffect(()=>{
    loadUserDetails();
 }, []);

 const {id} = useParams();

 const values = {
  name : '',
  username : '',
  phone : '' ,
  email : ''
}

 const [user, setUser] = useState(values);

 const loadUserDetails = async () =>{
  const responce = await getUser(id);
  const final = responce.data[0];
 setUser(final);
 console.log(final  )
}

  const onChangeValue = (e) =>{
    setUser({...user, [e.target.name] : e.target.value});
  
  }

  const navigate = useNavigate();

  const EditUserDetails = async() =>{
    await editUser(user, id);
    navigate('/all')
  }

  console.log(user.name)

  return (
    <Container>
    <Typography variant="h3" >Edit user</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input type="text" name = "name"  onChange={e =>onChangeValue(e)} value={user.name} />
      </FormControl>
      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input type ="text" name = "username" onChange={e =>onChangeValue(e)} value={user.username} />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input type ="number" name = "phone" onChange={e =>onChangeValue(e)} value={user.phone} />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input type = "email" name="email" onChange={e =>onChangeValue(e)} value={user.email} />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick = {EditUserDetails}>Edit User</Button>
      </FormControl>
    </Container>
  )
}

const Container = styled(FormGroup)`
width:50%;
margin:1rem auto 0 auto;
div{
  margin-top:1rem;
};
`

export default Edituser