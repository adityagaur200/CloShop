import React from 'react'
import SideBar from './SideBar'
import CustomerDetails from './CustomerDetails'
import { Box, Divider, Stack } from '@mui/material'

const Profile = () => {
  return (
    <Stack direction={"row"} gap={10} paddingTop={10}>
        <Box ml={20} alignContent={'center'} >
        <SideBar/>
        </Box>
        <Box height="auto" border={"1px solid grey"}/>
        <Divider orientation='vertical' sx={{ backgroundColor: 'black' }}/>
        <Box justifyContent={'center'} alignContent={'center'}>
        <CustomerDetails/>
        </Box>
    </Stack>
  )
}

export default Profile
