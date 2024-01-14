import React from 'react';
import './style.css';
import logo1 from '../../images/Layer 1.png'; 
import logo2 from '../../images/Camada 2.png'; 
import social1 from '../../images/Social (1).png';
import social2 from '../../images/Social (2).png';
import social3 from '../../images/Social (3).png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="faixa vermelha">
        <div>Realização</div>
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

        <div className="blocoLinks">
          <div className='titulo1'>Links Úteis</div>
          <Link to={`/`} className='linkModulo'>
            <div>Início</div>
          </Link>
            <div>Sobre Nós</div>
          <Link to={`/cursos`} className='linkModulo'>
            <div>Módulos</div>
          </Link>
          <Link to={`/parceiros`} className='linkModulo'>
            <div>Parceiros</div>
          </Link>
          <Link to={`/transparencia`} className='linkModulo'>
            <div>Transparência</div>
          </Link>

        </div>

        <div className="blocoRedes">
          <div className='titulo2'>Redes Sociais</div>
          <div className="redesSociais">
            <a href='https://www.facebook.com/LAIS.HUOL/' target='_blank' rel='noopener noreferrer'>
              <img src={social1} alt="Redes Sociais" className='logoSociais f'/>
            </a>
            <a href='https://www.instagram.com/laishuol/' target='_blank' rel='noopener noreferrer'>
              <img src={social2} alt="Redes Sociais" className='logoSociais'/>
            </a>
            <a href='https://twitter.com/laishuol' target='_blank' rel='noopener noreferrer'>
              <img src={social3} alt="Redes Sociais" className='logoSociais'/>
            </a>
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
