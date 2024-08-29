import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import DropDown from './DropDown'
import IconBox from './IconBox'

const Header = () => {
  return (
    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
      <Box>
        <DropDown/>
      </Box>
      <Box>
        <Typography fontFamily={'cursive'} fontSize={30}>
          CLOSHOP
        </Typography>
      </Box>
      <Box mr={2}>
        <IconBox/>
      </Box>
    </Stack>
  )
}

export default Header
