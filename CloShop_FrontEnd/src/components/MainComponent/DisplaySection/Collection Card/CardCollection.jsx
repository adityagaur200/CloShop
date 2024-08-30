import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom'

const CardCollection = () => {
    const navigate=useNavigate();
  return (
    <Box width={"100%"} mb={5}>
        <Stack direction={'column'} alignItems={'center'} gap={2} justifyContent={'center'}>
            <Stack>
                <Typography fontSize={35} fontWeight={'bold'}>
                    Collection
                </Typography>
            </Stack>
            <Stack direction={'row'} gap={3} justifyContent={"center"}>
                <Card dataImage="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=" header="Type1" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                <Card dataImage="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=" header="Type2" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                <Card dataImage="https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=" header="Type3" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                <Card dataImage="https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop=" header="Type4" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
            </Stack>
        </Stack>
    </Box>
    
  )
}

export default CardCollection
