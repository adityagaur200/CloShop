import { Box } from '@mui/material'
import React from 'react'
import Login from './Login'
import { useLocation } from 'react-router-dom'
import Signin from './Signin'
import Header from '../Header/Header'

const AuthForm = () => {
    const location = useLocation();
  return (
    <>
    <Header/>
    <Box justifyContent={'center'} alignItems={'center'} display={'flex'} height={'80vh'}>
            {location.pathname == "/login"?<Login/>:<Signin/>}
    </Box>
    </>
  )
}

export default AuthForm

