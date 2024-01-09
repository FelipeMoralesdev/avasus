import React from 'react';
import { Link } from 'react-router-dom';
import avasusMenuImage from '../../images/avasusMenu.png';
import './style.css';

const Menu = () => {
  return (
    <div className="group626221">
        <div>
            <img src={avasusMenuImage} alt="Avasus Menu" />
        </div>
        <div className='palavras'>
            <div><Link to="/">Início</Link></div>
            <div>Sobre Nós</div>
            <div><Link to="/cursos">Cursos</Link></div>
            <div><Link to="/parceiros">Parceiros</Link></div>
            <div><Link to="/transparencia">Transparência</Link></div>
            <div>Contato</div>
        </div>
        <div>
            <input type="text" placeholder="Busca por um assunto..." />
        </div>
        <div className='buttons'>
            <button className="button" id="button1">Entrar</button>
            <button className="button" id="button2">Cadastrar</button>
        </div>

    </div>
  );
};

export default Menu;