import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <Container>
      <LeftDiv>
        <LogoDiv>
          <Logo />
        </LogoDiv>

        <Description>Lorem ipsum dolor sit amet</Description>
        <Description>Lorem ipsum dolor sit amet</Description>
        <Description>Lorem ipsum dolor sit amet</Description>
      </LeftDiv>
      <RightDiv>
        <IconDiv>
          <InstagramIcon className="socialIcon"/>
          <FacebookIcon className="socialIcon"/>
          <TwitterShape>
          <TwitterIcon className="twitterIcon"/>
          </TwitterShape>
        </IconDiv>
      </RightDiv>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  height: 176px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 11px;
`;

const LeftDiv = styled.div`
  width: 100%;
  margin-left: 100px;
`;
const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  width: 112px;
`;

const Description = styled.div`
  font-size: 16px;
  color: #737b7d;
  padding: 6px 0px;
`;

const RightDiv = styled.div`
  width: 100%;
  margin-right: 100px;
  display: flex;
  justify-content: right;
`;

const IconDiv = styled.div`
  width: 30%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
`;

const TwitterShape = styled.div`
display: flex;
align-items: center;
justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #3C64B1;
  border-radius: 6px;
`;