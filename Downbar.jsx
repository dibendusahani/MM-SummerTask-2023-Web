import { styled } from '@material-ui/core'
import { alpha } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';


import React from 'react'



const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 20),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(3),
    marginLeft: 0,
    width: '40%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(143),
      width: '200px',
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 1),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '40%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

function Downbar() {
  return (


        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for Articles ..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
    
  )
}

export default Downbar