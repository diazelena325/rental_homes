import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import houseData from "../data/homes";
import renterData from "../data/renterTypes";
import Banner from '../components/Banner';


function HomePage() {
  return (
    <Container>
    
     <Header/>
     <Carousel data={houseData} title="Favorite Rentals"/>
     <Carousel data={renterData} title="Favorite Rentals"/>
     <Banner/>
     
    </Container>
  )
}

export default HomePage

const Container = styled.div`
  
`;



