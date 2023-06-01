import React from 'react'
import styled from "styled-components";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';

function Search() {
  return (
    <Container>
      <InputDiv>
      <span>Location</span>
<input></input>
<span>Range</span>
<input></input>
<span>to</span>
<input></input>
      </InputDiv>

<ButtonDiv>
<button>Search</button>
<button>Advance Search</button>
  </ButtonDiv>
<StyleDiv>
<button><FormatListBulletedIcon/></button>
<button><GridViewIcon/></button>
</StyleDiv>

    </Container>
  )
}

export default Search;

const Container = styled.div`
padding: 28px 100px;

    background-color: darkgray;
    height: 180px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const InputDiv = styled.div`

`;

const ButtonDiv = styled.div`

`;

const StyleDiv = styled.div`

`;