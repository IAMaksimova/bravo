import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from "./Contacts_Styles"
export const Contacts: React.FC = () => {

    return (
        <S.Contacts id={"contact"}>
            <Container>
                <SectionTitle>Контакты</SectionTitle>
                <S.Form>
                    <S.Field placeholder={"имя"}/>
                    <S.Field placeholder={"тема обращения"}/>
                    <S.Field placeholder={"сообщение"} as={"textarea"}/>
                    <Button style={{margin: '0 auto'}} type={"submit"}>Отправить</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};



