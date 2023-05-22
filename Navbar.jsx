import { AppBar, Toolbar, Typography, styled } from '@material-ui/core'
import React from 'react'

const StyledToolbar = styled(Toolbar)({
    display:"flex" , 
    justifyContent:"space-between" ,
})

function Navbar() {
  return (
    <AppBar position="sticky">
        <StyledToolbar>
            <Typography variant='h6'>
                
            </Typography>
        </StyledToolbar>
    </AppBar>
  )
}
export default Navbar;