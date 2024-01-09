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
      <div className='cabecalho'>Início / Parceiros </div>
      <h1 className='tituloParceiros'>Nossos parceiros</h1>
      <div className='resultados'>
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
      <div>
        <span>Página {paginaAtual} de {calcularNumeroDePaginas()}{' '}</span>
        {Array.from({ length: calcularNumeroDePaginas() }).map((_, index) => (
          <button key={index} onClick={() => handleTrocarPagina(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Parceiros;
