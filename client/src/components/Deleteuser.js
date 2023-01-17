import React from 'react'
import { Button, Backdrop, Card, CardContent, Typography, CardActions } from '@mui/material'
import {deleteUser} from '../service/api';
import styled from '@emotion/styled';

const Deleteuser = (props) => {

    const id = props.id;
    const hyy = props.fung;

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen(!open);
    };

    const deleteNow = async () =>{

        await deleteUser(id);
        hyy();
        
    }

  return (
    <>
        <Button variant = "contained" color="error" sx={{ml:"10px"}} onClick={handleToggle} >Delete</Button>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
        >
            <Container>
                <Contant>
                    <Typography>
                        Do You want to delete the User
                    </Typography>
                </Contant>
                <Btn>
                    <Button onClick = {handleClose} variant="outlined" color ="success">Cancel</Button>
                    <Button onClick = {deleteNow} variant="outlined" color ="error">Delete</Button>
                </Btn>
            </Container>
        </Backdrop>
    </>
   
  )
}

const Container = styled(Card)`
width:50rem;
height:10rem;
`

const Contant = styled(CardContent)`
padding:2rem;
`

const Btn = styled(CardActions)`
display:flex;
justify-content:right;
gap:1rem;
padding:0rem 3rem;
`


export default Deleteuser