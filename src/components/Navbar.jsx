import React from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <NavContainer>
      <LeftDiv>
        <Logo />
      </LeftDiv>
      <RightDiv>
        <Link>Browse Homes for Rent</Link>
        <Link>Advance Search</Link>
        <AcctShape>
          <AccountCircleOutlinedIcon className="accountIcon" />
        </AcctShape>
        <EmailOutlinedIcon className="emailIcon" />
        <HelpOutlineOutlinedIcon className="helpIcon" />
      </RightDiv>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  width: 100%;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;

const RightDiv = styled.div`
  width: 60%;
  display: flex;
  align-items: center;

  padding-right: 100px;
  justify-content: right;
  gap: 14px;
`;

const Link = styled.span`
  color: #373f41;
  font-size: 14px;
  font-weight: 600;
  font-family: "Mulish", sans-serif;
`;

const AcctShape = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  border-radius: 100%;
  background-color: #e5e5e5;
  height: 48px;
  width: 48px;
`;
