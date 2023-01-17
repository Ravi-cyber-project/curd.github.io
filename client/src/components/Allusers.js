import { Table, TableBody, TableCell, TableHead, TableRow , styled} from '@mui/material'
import React, { useState } from 'react';
import {getUsers} from '../service/api';
import {Button} from '@mui/material';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import Deleteuser from './Deleteuser';


const AllUsers = () => {

const [users, setUsers] = useState([]);

  useEffect(()=>{
    getAllusers();
  }, [])

  const getAllusers = async ()=>{
    const resp = await getUsers();
    setUsers(resp.data);
  }


  return (
    <Container>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableRow></TableRow>
        </TableRow>
      </TableHead>
      <TableBody>
          {
            users.map(user =>(
                <Tbody>
                  <TableCell>{user._id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell><Button variant = "contained" color="warning" component={Link} to ={`/edit/${user._id}`}>Edit</Button>
                  <Deleteuser id={user._id} fung={getAllusers}/>
                  </TableCell>
                </Tbody>
              )
            )
          }
        </TableBody>
    </Container>
  )
}

const Container = styled(Table)`
width:90%;
margin:50px auto 0 auto;
  thead{
    background-color:black;
    

    &>tr>th{
      color:white;
      font-size:20px;
    }
  }
  
`;

const Tbody = styled(TableRow)`
&>td{
  font-size:20px;
}
`



export default AllUsers