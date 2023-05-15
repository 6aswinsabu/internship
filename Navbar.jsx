import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <br/>
     <AppBar color="primary">
      <Toolbar style={{color:'red'}}>
        <Typography align='left' sx={{flexGrow:1}}>DASHBOARD</Typography>
        <Button variant='contained' style={{color:'white'}}>HOME</Button>
        <Button variant='contained' style={{color:'white'}}>ADD</Button>
      </Toolbar>
      
      </AppBar>  
        
    </div>
  )
}

export default Navbar