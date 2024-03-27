import './App.css';
import styled from 'styled-components';
import {Header} from "./layout (header, footer...)/header/Header";
import {Main} from "./layout (header, footer...)/sections/main/Main";
import {Skills} from "./layout (header, footer...)/sections/skills/Skills";
import {Works} from "./layout (header, footer...)/sections/works/Works";
import {Testimony} from "./layout (header, footer...)/sections/testimony/Testimony";
import {Contacts} from "./layout (header, footer...)/sections/contacts/Contacts";
import {Slogan} from "./layout (header, footer...)/sections/slogan/Slogan";
import {Footer} from "./layout (header, footer...)/footer/Footer";
import {Particle} from "./components/particle/Particle";
import {TestPart} from "./layout (header, footer...)/sections/TestPart";


function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <TestPart/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contacts/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;