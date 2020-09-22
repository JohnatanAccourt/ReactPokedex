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
                    Tenho 20 anos sou Front-End Developer, criei este projeto com o intuito de extender meu portifolio para mostrar meu trabalho através de redes sociais tais como o linkedin.
                </h3>
                <p>
                    Esse pequeno projeto consiste em trabalhar com o React utilizando o máximo dos conhecimentos adquiridos através de documentações e vídeos, ou seja, hooks, estados, componentes e props. E também utilizar conhecimentos prévios que já possuo.
                    Usando a API complexa como do pokeapi que possui toneladas de informações acredito muito que daqui em diante vou ter mais facilidade de trabalhar com requests HTTP.
                </p>
                <p>
                    Quando olhei esta API vi uma grande oportunidade para criar esse app pois possuia um conhecimento do React mas apenas teórico mas usei o que aprendi no React para trabalhar em um projeto em React Native e só agora, aqui, tive a chance de executar tudo que aprendi na teoria e tudo que executei no React Native aqui na Pokedex.
                </p>
                <p>
                    Gostei Bastante de ter trabalhado neste pequeno projeto, tive alguns desafios mas deu tudo certo no final que eu havia planejado pois gostaria de fazer-lo em 1 semana e deu certo. Caso esteja vendo esse projeto e quiser implementar algo por favor fique a vontade <span role="img" aria-label="valeu?">😁</span>.
                </p>
                <p>
                    Não se esqueça de conferir repositório abaixo e as minhas redes sociais <span role="img" aria-label="Valeu Falou!">👋</span>
                </p>
                <button>
                    <a href={'https://github.com/JohnatanAccourt/ReactPokedex'} className="buttonTextRepository">
                        Clique para ver o repositório
                    </a> 
                </button>
            </div>

            

            <section>
                <a href="https://github.com/JohnatanAccourt" target="_blank" rel="noopener noreferrer" title="Github">
                    <GitHubIcon color="#fff" fontSize="35px" />
                </a>

                <a href="https://www.linkedin.com/in/johnatan-accourt-93937a19a/" rel="noopener noreferrer" target="_blank" title="LinkedIn">
                    <LinkedinIcon color="#fff" fontSize="35px" />
                </a>

                <a href="mailto:johnatan1999accourt@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
                    <EmailIcon style={{color: "white", fontSize: 35}} />
                </a>

                <a href="https://www.instagram.com/johll_99/" target="_blank" rel="noopener noreferrer" title="Instagran">
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