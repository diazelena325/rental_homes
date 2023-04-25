import React from 'react'
import styled from 'styled-components'

function HomePage() {
  return (
    <Container>
      <Navbar>
        Logo
      </Navbar>
    </Container>
  )
}

export default HomePage

const Container = styled.div`
  
`;

const Navbar = styled.nav`
  background-color: yellow;
  width: 100%;
  height: 88px;
`;

