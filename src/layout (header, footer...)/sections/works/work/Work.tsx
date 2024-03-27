import React from 'react';
import {Link} from "../../../../components/Link";
import {Button} from "../../../../components/Button";
import {S} from "../Works_Styles"

type WorkPropsType = {
    title: string
    text: string
    src: string
    link: string

}
export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt={"photo"}/>
                <Button><a target="_blank" href={props.link}>смотреть</a></Button>
            </S.ImageWrapper>

            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Link active href={"#"}>демо</Link>
                <Link href={"#"}>наведи</Link>
            </S.Description>

        </S.Work>
    );
};



