import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import houseData from "../data/homes";
import renterData from "../data/renterTypes";


function HomePage() {
  return (
    <Container>
     <Navbar/>
     <Header/>
     <Carousel data={houseData} title="Favorite Rentals"/>
     <Carousel data={renterData} title="Favorite Rentals"/>
    </Container>
  )
}

export default HomePage

const Container = styled.div`
  
`;



