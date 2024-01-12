import React from 'react';
import './style.css';
import logo1 from '../../images/Layer 1.png'; 
import logo2 from '../../images/Camada 2.png'; 
import social1 from '../../images/Social (1).png';
import social2 from '../../images/Social (2).png';
import social3 from '../../images/Social (3).png';

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
          <p className='laisFaixaCinza'>Laboratório de Inovação Tecnológica em Saúde</p>
        </div>

        <div className="bloco">
          <h6>Links Úteis</h6>

            <div>Início</div>
            <div>Sobre Nós</div>
            <div>Módulos</div>
            <div>Parceiros</div>
            <div>Transparência</div>

        </div>

        <div className="blocoRedes">
          <h7>Redes Sociais</h7>
          <div className="redesSociais">
            <img src={social1} alt="Redes Sociais" className='logoSociais'/>
            <img src={social2} alt="Redes Sociais" className='logoSociais'/>
            <img src={social3} alt="Redes Sociais" className='logoSociais'/>
          </div>
        </div>
      </div>

      <div className="faixa cinza-claro">
        <p>2022 © LAIS (HUOL). Todos os direitos reservados</p>
      </div>
    </div>
  );
};

export default Footer;
