import styled from '@emotion/styled'
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material'
import React from 'react';
import { useState } from 'react';
import { addUser } from '../service/api';
import {useNavigate} from 'react-router-dom';

const AddUsers = () => {

  const navigate = useNavigate();

  const values = {
    name : '',
    username : '',
    phone : '' ,
    email : ''
  }

  const [user, setUser] = useState(values);

  const onChangeValue = (e) =>{
    setUser({...user, [e.target.name] : e.target.value});
    console.log(user);
  }

  const AddUserDetails =async() =>{
    await addUser(user);
    navigate('/all')
  }

  return (
    <Container>
    <Typography variant="h3" >Add user</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input type="text" name = "name" onChange={onChangeValue} />
      </FormControl>
      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input type ="text" name = "username" onChange={onChangeValue} />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input type ="number" name = "phone" onChange={onChangeValue} />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input type = "email" name="email" onChange={onChangeValue} />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick = {AddUserDetails}>Add User</Button>
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

export default AddUsers