import React from 'react'
import { NavLink } from 'react-router-dom';
import {AppBar,  Toolbar,  styled} from '@mui/material';


const nevbar = () => {

   
  return (
    <AppBar
    sx={{backgroundColor:"#111111", position:"static"}}>
        <Toolbar>
            <Tabs to ="/">MERN By Ravi</Tabs>

            <Tabs to = "/all">All Users</Tabs>

            <Tabs to = "add">Add Users</Tabs>
    
        </Toolbar>
    </AppBar>
  )
}

const Tabs = styled(NavLink)`
font-size:20px;
margin-right:2rem;
color:inherit;
text-decoration:none;
`

export default nevbar;
