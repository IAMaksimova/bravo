import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from "./Skills_Styles"
import {Fade} from "react-awesome-reveal";

const skillData = [
    {
        iconId: "code",
        title: "Вася?",
        description: "Изначально Вася в песне был Эдиком, так как Эдуард было одним из самых популярных имён среди советских стиляг. Но Валерий Сюткин, недавно пришедший в коллектив, выразил сомнения, что вариант с Эдиком найдёт понимание у поклонников."
    },
    {
        iconId: "css",
        title: "Этот город?",
        description: "Весной 1996 года на песню «Этот город» был снят один из самых дешевых клипов в истории «Браво». Героем одного из эпизодов видео стал тогда ещё совсем молодой актёр Максим Аверин."
    },
    {
        iconId: "react",
        title: "До свидания?",
        description: "В 1998 году песню «До свидания» перезаписали расширенным составом, в который вошли все вокалисты группы — Жанна Агузарова, Валерий Сюткин и Роберт Ленц. Сделано это было к юбилейным концерта"
    },
    {
        iconId: "ts",
        title: "Стильный оранжевый галстук?",
        description: "Оказывается, что «Пожар в джунглях» и «Рассвет в Африке» — это не просто строчки из песни, а названия разновидностей расцветок галстуков, которые были популярны у стиляг СССР."
    },
    {
        iconId: "styled-components",
        title: "Чак Берри?",
        description: "Песня «Девчонка 16 лет» является вольным пересказом песни американского музыканта Чака Берри Sweet Little Sixteen"
    },
]

export const Skills = () => {
    return (
        <S.Skills id={"skills"}>
            <Container>
                <SectionTitle>Факты</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Fade cascade damping={0.2}>
                        {skillData.map((s, index) => {
                            return(
                                <Skill iconId={s.iconId} title={s.title}
                                       description={s.description} num={index + 1}/>
                            )
                        })}
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};

