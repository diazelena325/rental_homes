import React from 'react'
import styled from "styled-components";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';

function Search() {
  return (
    <Container>
<span>Location</span>
<input></input>
<span>Range</span>
<input></input>
<span>to</span>
<input></input>
<button>Search</button>
<button>Advance Search</button>
<button><FormatListBulletedIcon/></button>
<button><GridViewIcon/></button>
    </Container>
  )
}

export default Search;

const Container = styled.div`
    background-color: darkgray;
    height: 200px;
`;