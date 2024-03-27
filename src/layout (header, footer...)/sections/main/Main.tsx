import React from 'react';
import photo from '../../../assets/images/mainphoto.png'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles"
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
    return (
        <S.StyledMain id={"home"}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Добро пожаловать</S.SmallText>
                        <S.Name>Это <span>группа "Браво"</span></S.Name>
                        <S.MainTitle>
                            <p>A Frontend Developer.</p>
                            <Typewriter
                                options={{
                                    strings: ['рок-н-ролл.', 'поп-рок.', 'регги и джаз.'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 150
                                }}
                            />
                        </S.MainTitle>
                    </div>

                    <Tilt>
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt={"i am"}/>
                        </S.PhotoWrapper>
                    </Tilt>

                </FlexWrapper>
            </Container>
        </S.StyledMain>
    );
};

