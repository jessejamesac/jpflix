import React from 'react';
import Logo from '../../assets/img/logo.png';
import ButtonLink from '../ButtonLink';
import './Menu.css';

function Menu() {
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo da JPFlix" />
            </a>
            <ButtonLink className="ButtonLink" href="/" >
                Novo vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;