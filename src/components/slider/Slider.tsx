import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from "./Slider_Styles"
import '../../styles/Slider.css'

type SlidePropsType = {
    text: string
    userName: string
}
const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <S.Text>{props.text}</S.Text>
            <S.Name>@{props.userName}</S.Name>
        </S.Slide>
    )
}

const items = [
    <Slide userName={"Песня облаков"}
           text={"В любой печали все пойдет на лад,\n" +
               "Любой мечте наступит свой черед.\n" +
               "Ведь, если к ночи отгорел закат,\n" +
               "То, значит, утром вновь придет восход."}/>,
    <Slide userName={"Города"}
           text={"Городу снится единственный сон — нету людей и свободен он.\n" +
               "Город мечтает упасть в тишину, и он убивает нас по одному."}/>,
    <Slide userName={"Это за окном рассвет"}
           text={"Я знаю точно, куда течет река,\n" +
               "Я знаю точно, зачем растут цветы.\n" +
               "Куда прячет утро три тысячи звезд,\n" +
               "Не считая голубой луны."}/>
];

export const Slider = () => (
        <S.Slider>
            <AliceCarousel
                mouseTracking
                items={items}
            />
        </S.Slider>
    )
;



