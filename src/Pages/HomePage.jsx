import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Header from '../components/Header';

function HomePage() {
  return (
    <Container>
     <Navbar/>
     <Header/>
    </Container>
  )
}

export default HomePage

const Container = styled.div`
  
`;



