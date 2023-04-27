import React from 'react'
import styled from 'styled-components'
import Star from '../images/star_empty.png'
import Bgimage from '../images/bg.png'
function Header() {
  return (
    <Container>
        <div>
        <StarImg src={Star}/>
        <BgImg src={Bgimage} />
        </div>
        
        <div>
        <Title>Latest Rental Property</Title>
        <Desc>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum.</Desc>
        <div>
        <DetButton>View Details</DetButton>
        </div>
        
        </div>
        
    </Container>
  )
}

export default Header

const Container = styled.div`
    background-color: rgba(60, 101, 177, 10%);
    height: 480px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`;

const BgImg  = styled.img `
    
`;

const StarImg  = styled.img `
    
`;

const Title  = styled.h1 `
    
`;

const Desc  = styled.span`
    
`;

const DetButton  = styled.button `
    
`;



