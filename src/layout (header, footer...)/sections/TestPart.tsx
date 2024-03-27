import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {SectionTitle} from "../../components/SectionTitle";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from './skills/Skills_Styles'
import {Icon} from "../../components/icon/Icon";
import {Slider} from "../../components/slider/Slider";
import photo from '../../assets/images/test.jpg'


export const TestPart: React.FC = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>О смыслах</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <Cover cover={photo}>
                        <TestText>[ Работа "Браво" несет в себе мощное послание и влияет на эмоциональное и
                            интеллектуальное развитие их поклонников. </TestText>
                        <TestText>[ Работа "Браво" несет в себе мощное послание и влияет на эмоциональное и
                            интеллектуальное развитие их поклонников. </TestText>
                        <TestText>[ Работа "Браво" несет в себе мощное послание и влияет на эмоциональное и
                            интеллектуальное развитие их поклонников. </TestText>
                    </Cover>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  position: relative;
  background-color: #f8a95c;
  min-height: 50vh;

  ${S.IconWrapper} {
    margin: 28px 0 72px;
  }
`

const Cover = styled.div<{ cover: string }>`
  width: 70vw;
  height: 540px;
  background: url(${props => props.cover}), lightgray 50% / cover no-repeat;
  box-shadow: 4px 4px 73px 0 rgba(251, 215, 132, 0.50);
  background-size: cover;
  z-index: 0;
  padding: 30px;
  letter-spacing: -0.1px;
`

const TestText = styled.p`
  font-family: Montserrat, sans-serif;
  font-size: 25px;
  color: white;
  margin-top: 35px;
  width: 40vw;
  background-color: rgba(248, 169, 92, 0.37);
`