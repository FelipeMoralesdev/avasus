import React, { useState, useEffect } from 'react';
import './style.css'
import iconeUsuarios from '../../images/iconeUsuarios.png'
import iconeTempo from '../../images/iconeTempo.png'

const renderizarEstrelas = (nota) => {
    const estrelas = [];
    const estrelasPreenchidas = Math.floor(nota);
    const decimalPart = nota % 1;
  
    for (let i = 0; i < 5; i++) {
      let estiloEstrela = 'estrela';
  
      if (i < estrelasPreenchidas) {
        estiloEstrela += ' preenchida';
      } else if (i === estrelasPreenchidas && decimalPart > 0) {
        estiloEstrela += ' meia-preenchida';
      }
  
      estrelas.push(<div key={i} className={estiloEstrela}></div>);
    }
  
    return <div className="container-estrelas">{estrelas}</div>;
  };


const MinhaApp = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/lais-huol/edital-001-23-modulos-educacionais/main/db.json');
        const data = await response.json();

        const cursosData = data.cursos;

        const cursosFiltrados = cursosData.filter(curso => curso.id === 4 || curso.id === 5 || curso.id === 6);

        const cursosFormatados = cursosFiltrados.map(({ id, titulo, parceiros, matriculados, duracao, avaliacao, capa }) => ({
          id,
          titulo,
          parceiros,
          matriculados,
          duracao,
          avaliacao,
          capa,
        }));

        setCursos(cursosFormatados);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className='container'>
      <ul>
        {cursos.map(curso => (
          <li className='listaCursos' key={curso.id}>
            <img className='img-quadrada' src={curso.capa} alt={`Capa do curso ${curso.titulo}`}  />
            <div className='infos'>
                <div className='titulo'>{curso.titulo}{' '}</div>
                <div className='parceiros'>{curso.parceiros}{' '}</div>
            </div>
            <img src={iconeUsuarios} alt={'Icone Usuario'} className='icone' />
            {Number(curso.matriculados).toLocaleString()}{' '}
            <img src={iconeTempo} alt={'Icone Tempo'} className='icone' />
            {curso.duracao}{' '}
            {renderizarEstrelas(curso.avaliacao)}
            {curso.avaliacao.toString().replace('.', ',')}{' '}
            <div className='modulo'>Ver módulo</div>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default MinhaApp;
