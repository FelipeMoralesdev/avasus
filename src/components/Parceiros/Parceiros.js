import React, { useState, useEffect } from 'react';
import './style.css';


const Parceiros = () => {
  const [parceiros, setParceiros] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const parceirosPorPagina = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/lais-huol/edital-001-23-modulos-educacionais/main/db.json');
        const data = await response.json();

        const parceirosData = data.parceiros;

        const parceirosFormatados = parceirosData.map(({ id, capa, titulo }) => ({
          id,
          capa,
          titulo
        }));

        setParceiros(parceirosFormatados);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []);

  const obterParceirosDaPaginaAtual = () => {
    const indiceInicio = (paginaAtual - 1) * parceirosPorPagina;
    const indiceFim = indiceInicio + parceirosPorPagina;

    return parceiros.slice(indiceInicio, indiceFim);
  };

  const calcularNumeroDePaginas = () => {
    return Math.ceil(parceiros.length / parceirosPorPagina);
  };

  const handleTrocarPagina = novaPagina => {
    setPaginaAtual(novaPagina);
  };

  return (
    <div className='containerParceiros'>
      <div className='cabecalhoParceiros'>Início <b>/ Parceiros</b> </div>
      <h1 className='tituloParceiros'>Nossos parceiros</h1>
      <div className='resultadosParceiros'>
        <span>{obterParceirosDaPaginaAtual().length} de {parceiros.length} resultados</span>
      </div>
      <div >
        <ul className='containerCardParceiros'>
          {obterParceirosDaPaginaAtual().map(parceiro => (
            <li className='cardParceiros' key={parceiro.id}>
                <div className='divisao1'>
                    <img className='imgParceiros' src={parceiro.capa} alt={`Capa do parceiro ${parceiro.titulo}`} />
                </div>
                <div className='divisao2'>
                    <div className='tituloCardParceiros'>{parceiro.titulo}{' '}</div>
                </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='botoes'>
      {Array.from({ length: calcularNumeroDePaginas() }).map((_, index) => {
        const pagina = index + 1;
        
        if (pagina === 1) {
          return (
            <button key={index} onClick={() => handleTrocarPagina(pagina)}  className={`bttnPag ${pagina === paginaAtual ? 'paginaAtual' : ''} primeiroBotao`}>
              {pagina}
            </button>
          );
        }

        if (pagina === paginaAtual - 2) {
          return (
            <button key={`ellipsis-before-${pagina}`} className={`bttnPag ${pagina === paginaAtual ? 'paginaAtual' : ''}`}>
              {"..."}
            </button>
          );
        }

        if (pagina >= paginaAtual - 1 && pagina <= paginaAtual + 1) {
          return (
            <button key={index} onClick={() => handleTrocarPagina(pagina)} className={`bttnPag ${pagina === paginaAtual ? 'paginaAtual' : ''}`}>
              {pagina}
            </button>
          );
        }

        if (pagina === paginaAtual + 2) {
          return (
            <button key={`ellipsis-after-${pagina}`} className={`bttnPag ${pagina === paginaAtual ? 'paginaAtual' : ''}`}>
              {"..."}
            </button>
          );
        }

        if (pagina === calcularNumeroDePaginas()) {
          return (
            <button key={index} onClick={() => handleTrocarPagina(calcularNumeroDePaginas())} className={`bttnPag ${pagina === paginaAtual ? 'paginaAtual' : ''}`}>
              {calcularNumeroDePaginas()}
            </button>
          );
        }

        return null;
      })}


      {paginaAtual < calcularNumeroDePaginas() && (
    <button onClick={() => handleTrocarPagina(paginaAtual + 1)} className='bttnPag ultimoBotao'>
      {'Próximo >'}
    </button>
  )}
      </div>
    </div>
  );
};

export default Parceiros;
