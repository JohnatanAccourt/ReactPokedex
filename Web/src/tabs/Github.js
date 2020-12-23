import React from 'react';

import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from 'react-ionicons/lib/LogoGithub';
import LinkedinIcon from 'react-ionicons/lib/LogoLinkedin';
import InstagranIcon from 'react-ionicons/lib/LogoInstagram';
import Menu from '@material-ui/icons/Menu';

import { 
    GithubContainer
} from '../styles/github';

export default function Github(props){
    return(
        <GithubContainer>
            <button className="mobileBTN" onClick={props.menuMobile}>
                <span>
                    <Menu style={{color: '#fff', fontSize: '3rem'}} />
                </span>
            </button>
            <div>
                <h2>
                    Olá, sou Johnatan
                </h2>
                <h3>
                    Sou Front-End Developer e criei este projeto com o intuito de extender meu portifolio para mostrar meu trabalho através de redes sociais tais como o linkedin.
                </h3>
                <p>
                    Esse pequeno projeto consiste em trabalhar com o React utilizando o máximo dos conhecimentos adquiridos através de documentações e vídeos, ou seja, hooks, estados, componentes e props. E também utilizar conhecimentos prévios que já possuo.
                    Usando a API complexa como do pokeapi que possui toneladas de informações acredito muito que daqui em diante vou ter mais facilidade de trabalhar com requests HTTP.
                </p>
                <p>
                    Quando olhei esta API vi uma grande oportunidade para criar esse app pois possuia um conhecimento do React mas apenas teórico, mas usei o que aprendi para trabalhar em um projeto em React Native e só agora, aqui, tive a chance de executar tudo que aprendi na teoria e tudo que executei no React Native aqui na Pokedex.
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
                <div className="imgPerson"></div>
                <h1>Johnatan Accourt</h1>
                <div className="wrapperLogos">
                    <img src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/javascript.svg" alt="javascript"/>
                    <img src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/html5.svg" alt="html5"/>
                    <img src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/css3.svg" alt="css3"/>
                    <img src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/sass.svg" alt="sass"/>
                    <img src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/bootstrap.svg" alt="bootstrap"/>
                    <img src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/jquery.svg" alt="jquery"/>
                    <img src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/react.svg" alt="react"/>
                    <img src="https://reactnavigation.org/img/spiro.svg" alt="react navigation"/>
                    <img src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/npm.svg" alt="npm"/>
                    <img src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/yarn.svg" alt="yarn"/>
                    <img src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/webpack.svg" alt="webpack"/>
                    <img src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/git.svg" alt="git"/>
                    <img src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/github-icon.svg" alt="github"/>
                    <img src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/nodejs.svg" alt="nodejs"/>
                    <img src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/express.svg" alt="express"/>
                </div>
            </aside>
        </GithubContainer>
    )
}