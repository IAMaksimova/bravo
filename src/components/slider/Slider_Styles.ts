import {theme} from "../../styles/Theme";
import styled from "styled-components";

const Slider = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Slide = styled.div`
  text-align: center;

`

const Text = styled.p`
  font-family: Montserrat, sans-serif;
`

const Name = styled.span`
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 22px 0 32px;
  display: inline-block;
`
const Pagination = styled.span`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    
    & + span{
      margin-left: 5px;
      
      &.active{
        background-color: ${theme.colors.accent};
        width: 20px;
      }

    }
    
  }
`

export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination
}