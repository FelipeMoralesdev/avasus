import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import avasusMenuImage from '../../images/avasusMenu.png';
import './style.css';

const Menu = () => {
    const location = useLocation();

  return (
    <div className="group626221">
        <div>
            <img className='avasusMenuImage' src={avasusMenuImage} alt="Avasus Menu" />
        </div>
        <div className='palavras'>
            <div><Link to="/" className={location.pathname === '/' ? 'current-page' : 'link'}>Início</Link></div>
            <div>Sobre Nós</div>
            <div><Link to="/cursos" className={location.pathname === '/cursos' ? 'current-page' : 'link'}>Cursos</Link></div>
            <div><Link to="/parceiros" className={location.pathname === '/parceiros' ? 'current-page' : 'link'}>Parceiros</Link></div>
            <div><Link to="/transparencia" className={location.pathname === '/transparencia' ? 'current-page' : 'link'}>Transparência</Link></div>
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