import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

export type TabsStatusType = "all" | "collective" | "music"

type TabMenuPropsType = {
    tabsItems: Array<{ status: TabsStatusType, title: string  }>
    changeFilterStatus: (value: TabsStatusType) => void
    currentFilterStatus: string
}

//тк в пропсах приходит одно значение (menuItems), можно не выносить типизацию в отдельный блок, а прописать ее сразу в объявлении реакт-компонента
export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyledTabMenu>

            <ul>
                {props.tabsItems.map((item, index)=>{
                   return(
                       <ListItem key={index}>
                       <Link active = {props.currentFilterStatus === item.status} as={"button"} onClick={() => {props.changeFilterStatus(item.status)}}>{item.title}</Link>
                   </ListItem>
                   )
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
  
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
  }
`

const ListItem = styled.li`
  

`
