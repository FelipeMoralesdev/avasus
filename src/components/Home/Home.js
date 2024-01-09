import React from 'react';
import './style.css'
import homeImage from '../../images/montagem avasus 1.png'
import avasusLogo from '../../images/avasusLogo.png'
import MinhaApp from '../API/api';


const Home = () => {

  return (
    <div className='container'>
      <div className='destaques'>
        <div className = 'overlayDestaque'/>
        <div className='containerImage'>
          <img src={homeImage} alt="Avasus Home" className='fundo' />
        </div> 
        <img src={avasusLogo} alt="Avasus Logo" className='logo' />
      </div>
      <div className='modulosEducacionais'>
        <h1>Módulos Educacionais</h1>
        <div className='classificacoes'>
          <div className='cla'>Mais Populares</div>
          <div className='cla'>Mais bem avaliados</div>
          <div className='cla'>Mais recentes</div>
        </div>
        <MinhaApp/>
        <div className='retangulo'>Ver mais</div>
      </div>
      <div className='containerParceirosHome'>
        <h1>Parceiros</h1>
        <div className='nomeParceiros'>
        <div>
          <div className='siglaParceiro'>Governo do RN</div>
          <div className='extensoParceiro'>Governo do Estado do Rio Grande do Norte.</div>
        </div>
        <div>
          <div className='siglaParceiro'>SESAP</div>
          <div className='extensoParceiro'>Secretaria de Saúde Pública do Estado do Rio Grande do Norte.</div>
        </div>
        <div>
          <div className='siglaParceiro'>UFRN</div>
          <div className='extensoParceiro'>Universidade Federal do Rio Grande do Norte.</div>
        </div>
        <div>
          <div className='siglaParceiro'>HUOL</div>
          <div className='extensoParceiro'>Hospital Onofre Lopes: Hospital Universitário da UFRN (Universidade Federal do Rio Grande do Norte). </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
