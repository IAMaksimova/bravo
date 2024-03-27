import React from 'react';
import styled from "styled-components";

//тк в пропсах приходит одно значение (menuItems), можно не выносить типизацию в отдельный блок, а прописать ее сразу в объявлении реакт-компонента
export const Menu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>

            <ul>
                {props.menuItems.map((item, index)=>{
                   return(
                       <li key={index}>
                       <a href="">{item}</a>
                   </li>
                   )
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`

