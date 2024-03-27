import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

const Footer = styled.footer`
  position: relative;
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`
const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`
const SocialLink = styled.a`
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.10);
  width: 35px;
  height: 35px;
  
  color: ${theme.colors.accent};
  
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${theme.animations.transition};

  &:hover{
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
    background-color: ${theme.colors.accent};
  }

`
const Name = styled.span`
  ${font({family: "Josefin Sans, sans-serif", weight: 700, Fmax: 22, Fmin: 16})};
  letter-spacing: 3px;
`
const Copyright = styled.small`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  opacity: 0.5;
`
const SocialItem = styled.li`

`

export const S = {
    Footer,
    SocialList,
    SocialLink,
    Name,
    Copyright,
    SocialItem
}