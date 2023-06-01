import React from 'react'
import styled from "styled-components";
import houseData from "../data/homes";
import SummaryListing from './SummaryListing'


function RentalList() {
    const cards = houseData.map((item) => {
        return <SummaryListing key={item.id} rentalData={item}/>;
    });
  return (
    <div>
{cards}
    </div>
    
    
  )
}

export default RentalList