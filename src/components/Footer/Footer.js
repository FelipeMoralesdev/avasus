import React from 'react';
import './style.css';
import logo1 from '../../images/Layer 1.png'; 
import logo2 from '../../images/Camada 2.png'; 
import redesSociais from '../../images/Social.png'; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="faixa vermelha">
        <p>Realização</p>
        <div >
          <img className="logos" src={logo1} alt="Logo 1" />
          <img className="logos" src={logo2} alt="Logo 2" />
        </div>
      </div>

      <div className="faixa cinza">
        <div className="bloco">
          <img className='logoMenor' src={logo1} alt="Logo Laboratório" />
          <p>Laboratório de Inovação Tecnológica em Saúde</p>
        </div>

        <div className="bloco">
          <p>Links Úteis</p>
          <ul>
            <li>Início</li>
            <li>Sobre Nós</li>
            <li>Módulos</li>
            <li>Parceiros</li>
            <li>Transparência</li>
          </ul>
        </div>

        <div className="bloco">
          <p>Redes Sociais</p>
          <img src={redesSociais} alt="Redes Sociais" />
        </div>
      </div>

      <div className="faixa cinza-claro">
        <p>2022 © LAIS (HUOL). Todos os direitos reservados</p>
      </div>
    </div>
  );
};

export default Footer;
