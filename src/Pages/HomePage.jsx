import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Carousel from '../components/Carousel';

function HomePage() {
  return (
    <Container>
     <Navbar/>
     <Header/>
     <Carousel/>
    </Container>
  )
}

export default HomePage

const Container = styled.div`
  
`;



