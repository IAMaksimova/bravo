import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import SocialImg from './../../../assets/images/proj-_1_.webp'
import Timer from './../../../assets/images/proj-_2_.webp'
import {Container} from "../../../components/Container";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {S} from "./Works_Styles"
import {AnimatePresence, motion} from "framer-motion";
import bravo1 from '../../../assets/images/bravo1.jpeg'
import bravo2 from '../../../assets/images/bravo2.jpg'
import music1 from '../../../assets/images/music1.jpg'
import music2 from '../../../assets/images/bravo2.webp'

const tabsItems: Array<{ status: TabsStatusType, title: string }> = [
    {
        title: "Все",
        status: "all"
    },
    {
        title: "О коллективе",
        status: "collective"
    },
    {
        title: "Музыка",
        status: "music"
    },
]

const worksData = [
    {
        title: "На перекрёстках весны",
        text: "«На перекрёстках весны» — девятый студийный альбом группы «Браво», вышедший весной 1996 года. Выходу альбома предшествовал макси-сингл «Ветер знает» (1995)",
        src: music1,
        type: "music",
        link: 'https://www.nashe.ru/letopis/63?ysclid=lu6gu9azzp920541704',
        id: 1
    },

    {
        title: "Состав группы",
        text: "«Браво» – рок-группа из России, основанная в 1983 году Евгением Хавтаном и Павлом Кузиным. Коллектив – редкое для отечественного рока явление, когда вокалист не считается его лидером и, собственно, не определяет лицо команды.",
        src: bravo1,
        type: "collective",
        link: 'http://www.bravogroup.ru/members.htm?ysclid=lu6dmtnvkv342606459',
        id: 2
    },
    {
        title: "Как «Браво» стало советскими стилягами",
        text: 'Стилистику музыки, которую в тот или иной период творчества играла группа, определить одним словом невозможно, да и зачем? Сегодня мы предлагаем вам перелистать страницы с выступлениями и записями группы "Браво", сохранившимися в архиве Гостелерадиофонда.',
        src: music2,
        type: "music",
        link: 'https://dzen.ru/a/XndnEhOxswGe_nya',
        id: 3
    },

    {
        title: "История создания группы",
        text: "История группы Браво берет отсчет с осени 1983 года, когда студент 1-го курса Московского Института Инженеров Железнодорожного Транспорта Евгений Хавтан приехал на прослушивание к музыкантам группы Постскриптум, возглавляемой тогда Гариком Сукачевым",
        src: bravo2,
        type: "collective",
        link: 'http://www.bravogroup.ru/band.htm?ysclid=lu6hchwfwu93336956',
        id: 4
    },
]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filtredWorks = worksData

    if (currentFilterStatus === "music") {
        filtredWorks = worksData.filter(work => work.type === "music")
    }
    if (currentFilterStatus === "collective") {
        filtredWorks = worksData.filter(work => work.type === "collective")
    }

    function changeFilterStatus (value: TabsStatusType){
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>"Браво"</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus = {currentFilterStatus}
                />
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    <AnimatePresence>
                        {filtredWorks.map((w, index) => {
                            return (
                                <motion.div style={ {width: "400px", flexGrow: 1, maxWidth: "540px"} }
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key={w.id}
                                >
                                    <Work title={w.title}
                                          text={w.text}
                                          src={w.src}
                                          link={w.link}
                                    key={w.id}/>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

