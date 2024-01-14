import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import homeImage from '../../images/montagem avasus 1.png'
import avasusLogo from '../../images/avasusLogo.png'
import setaDireita from '../../images/setaDireita.png'
import setaEsquerda from '../../images/setaEsquerda.png'
import barra from '../../images/barra.png'
import API from '../API/api';


const Home = () => {

  return (
    <div className='containerHome'>
      <div className='destaques'>
        <div className = 'overlayDestaque'/>
        <div className='containerImage'>
          <img src={homeImage} alt="Avasus Home" className='fundo' />
          <img src={setaEsquerda} alt="Seta Esquerda" className='setaEsquerda' />
          <img src={setaDireita} alt="Seta Direita" className='setaDireita' />
          <img src={barra} alt="Barra" className='barra' />
        </div> 
        <img src={avasusLogo} alt="Avasus Logo" className='logo' />
      </div>
      <div className='modulosEducacionais'>
        <h1>Módulos Educacionais</h1>
        <API/>
        <Link to="cursos" className='retangulo'>Ver mais</Link>
      </div>
      <div className='containerParceirosHome'>
        <h1>Parceiros</h1>
        <div className='nomeParceiros'>
        <div className='cadaParceiro'>
          <div className='siglaParceiro'>Governo do RN</div>
          <div className='extensoParceiro'>Governo do Estado do Rio Grande do Norte.</div>
        </div>
        <div className='cadaParceiro'>
          <div className='siglaParceiro'>SESAP</div>
          <div className='extensoParceiro'>Secretaria de Saúde Pública do Estado do Rio Grande do Norte.</div>
        </div>
        <div className='cadaParceiro'>
          <div className='siglaParceiro'>UFRN</div>
          <div className='extensoParceiro'>Universidade Federal do Rio Grande do Norte.</div>
        </div>
        <div className='cadaParceiro'>
          <div className='siglaParceiro'>HUOL</div>
          <div className='extensoParceiro'>Hospital Onofre Lopes: Hospital Universitário da UFRN (Universidade Federal do Rio Grande do Norte). </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
