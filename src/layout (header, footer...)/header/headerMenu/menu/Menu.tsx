import React from 'react';
import {S} from "../HeaderMenu_Styles"

const items = [
    {
        title: "Главная",
        href: "home"
    },
    {
        title: "Факты",
        href: "skills"
    },
    {
        title: "О группе",
        href: "works"
    },
    {
        title: "Цитаты",
        href: "testimony"
    },
    {
        title: "Контакты",
        href: "contact"
    }
]
export const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item, index) => {
                return (
                    <S.MenuItem key={index}>
                        <S.NavLink activeClass={"active"}
                                   spy={true}
                                   to={item.href}
                                   smooth={true}>
                            {item.title}
                            <S.Mask>
                                <span>{item.title}</span>
                            </S.Mask>
                            <S.Mask>
                                <span>{item.title}</span>
                            </S.Mask>
                        </S.NavLink>
                    </S.MenuItem>
                )
            })}
        </ul>
    );
};


