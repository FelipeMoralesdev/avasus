import React, { useState, useEffect } from 'react';
import './style.css'
import iconeUsuarios from '../../images/iconeUsuarios.png'
import iconeTempo from '../../images/iconeTempo.png'
import { Link } from 'react-router-dom';


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


const API = () => {
    const [cursos, setCursos] = useState([]);
    const [opcaoClassificacao, setOpcaoClassificacao] = useState('avaliados'); 
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://raw.githubusercontent.com/lais-huol/edital-001-23-modulos-educacionais/main/db.json');
          const data = await response.json();
  
          const cursosData = data.cursos;
  
         
          cursosData.sort((a, b) => b.matriculados - a.matriculados); 
          const cursosPopulares = cursosData.slice(0, 3);
  
          cursosData.sort((a, b) => b.avaliacao - a.avaliacao); 
          const cursosAvaliados = cursosData.slice(0, 3);
  
          const converterFormatoData = (dataString) => {
            const [dia, mes, ano] = dataString.split('/');
            return new Date(`${ano}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`);
          };

          cursosData.sort((a, b) => converterFormatoData(b.criado_em) - converterFormatoData(a.criado_em));
          const cursosRecentes = cursosData.slice(0, 3);
  
          let cursosFiltrados = [];
          if (opcaoClassificacao === 'populares') {
            cursosFiltrados = cursosPopulares;
          } else if (opcaoClassificacao === 'recentes') {
            cursosFiltrados = cursosRecentes;
          } else {
            cursosFiltrados = cursosAvaliados;
          }
  
          const cursosFormatados = cursosFiltrados.map(({ id, titulo, parceiros, matriculados, duracao, avaliacao, capa, criado_em }) => ({
            id,
            titulo,
            parceiros,
            matriculados,
            duracao,
            avaliacao,
            capa,
            criado_em
          }));
  
          setCursos(cursosFormatados);
        } catch (error) {
          console.error('Erro ao buscar dados da API:', error);
        }
      };
  
      fetchData();
    }, [opcaoClassificacao]);
  
    const handleClassificacaoChange = (novaOpcao) => {
      setOpcaoClassificacao(novaOpcao);
    };

  return (
    <div className='containerAPI'>
      <div className='classificacoes'>
        <div className={`cla ${opcaoClassificacao === 'populares' ? 'selecionado' : 'naoSelecionado'}`} onClick={() => handleClassificacaoChange('populares')}>Mais Populares</div>
        <div className={`cla ${opcaoClassificacao === 'avaliados' ? 'selecionado' : 'naoSelecionado'}`} onClick={() => handleClassificacaoChange('avaliados')}> Mais bem avaliados </div>
        <div className={`cla ${opcaoClassificacao === 'recentes' ? 'selecionado' : 'naoSelecionado'}`} onClick={() => handleClassificacaoChange('recentes')}> Mais recentes </div>
      </div>
      <ul>
            {cursos.map(curso => (
              <li className='listaCursos' key={curso.id}>
              <Link to={`/curso/${curso.id}`} className='linkModulo'>
                <img className='img-quadrada' src={curso.capa} alt={`Capa do curso ${curso.titulo}`}  />
              </Link>
                <div className='infos'>
                    <div className='titulo'>{curso.titulo}{' '}</div>
                    <div className='parceiros'>{curso.parceiros}{' '}</div>
                </div>
                <div>
                  <img src={iconeUsuarios} alt={'Icone Usuario'} className='iconeUsuario' />
                  {Number(curso.matriculados).toLocaleString()}{' '}
                </div>
                <div>
                  <img src={iconeTempo} alt={'Icone Tempo'} className='icone' />
                  {curso.duracao}{' '}
                </div>
                <div className='containerInfoEstrelas'>
                  {renderizarEstrelas(curso.avaliacao)}
                  {curso.avaliacao.toString().replace('.', ',')}{' '}
                </div>
                <Link to={`/curso/${curso.id}`} className='linkModulo'>
                  <div className='moduloAPI'>Ver módulo</div>
                </Link>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default API;
