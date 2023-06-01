import React from 'react'
import styled from "styled-components";
import Search from '../components/Search';
import RentalList from '../components/RentalList';
import Banner from '../components/Banner';

function Browse() {
  return (
<div>
<Search/>
<RentalList/>
<Banner/>
</div>
    )
}

export default Browse;