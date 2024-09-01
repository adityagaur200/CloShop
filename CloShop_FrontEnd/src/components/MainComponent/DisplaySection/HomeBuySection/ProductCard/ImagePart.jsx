import React from 'react'
import {Box, Container} from "@mui/material"
const ImagePart = () => {
  return (
    <Box>
      <img src='ExampleImage.jpg' style={{width:"270px",height:"420px",overflow:"hidden", cursor:"pointer"}}/>
    </Box>
  )
}

export default ImagePart
