import React from 'react';

import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from 'react-ionicons/lib/LogoGithub';
import LinkedinIcon from 'react-ionicons/lib/LogoLinkedin';
import InstagranIcon from 'react-ionicons/lib/LogoInstagram';

import { 
    GithubContainer
} from '../styles/github';

export default function Github(props){
    return(
        <GithubContainer>
            <div>
                <h2>
                    Olá, sou Johnatan
                </h2>
                <h3>
                    Tenho 20 anos sou Front-End Developer, criei este projeto com o intuito de ter portifolio para mostrar meu trabalho através de redes sociais tais como o linkedin.
                </h3>
                <p>
                    Esse pequeno projeto consiste em trabalhar com o React utilizando o máximo dos conhecimentos adquiridos através de documentações e vídeos, ou seja, hooks, estados, componentes e props. E também utilizar conhecimentos prévios que já possuo.
                    Usando a API complexa como do pokeapi que possui toneladas de informações  acredito muito que daqui em diante vou ter mais facilidade de trabalhar com requests HTTP.
                </p>
            </div>

            <section>
                <a href="https://github.com/JohnatanAccourt" target="_blank" rel="Github" title="Github">
                    <GitHubIcon color="#fff" fontSize="35px" />
                </a>

                <a href="https://www.linkedin.com/in/johnatan-accourt-93937a19a/" rel="linkedin" target="_blank" title="LinkedIn">
                    <LinkedinIcon color="#fff" fontSize="35px" />
                </a>

                <a href="mailto:johnatan1999accourt@gmail.com" target="_blank" rel="email" title="Email">
                    <EmailIcon style={{color: "white", fontSize: 35}} />
                </a>

                <a href="https://www.instagram.com/johll_99/" target="_blank" rel="instagran" title="Instagran">
                    <InstagranIcon color="#fff" fontSize="35px" />
                </a>
            </section>

            <aside>
                <div></div>
                <h1>Johnatan Accourt</h1>
            </aside>
        </GithubContainer>
    )
}