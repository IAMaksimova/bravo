import React from 'react';
import {Menu} from "../menu/Menu";
import {S} from "../HeaderMenu_Styles"

//тк в пропсах приходит одно значение (menuItems), можно не выносить типизацию в отдельный блок, а прописать ее сразу в объявлении реакт-компонента
export const DesktopMenu: React.FC = () => {
    return (
        <S.DesktopMenu>
           <Menu/>
        </S.DesktopMenu>
    );
};




