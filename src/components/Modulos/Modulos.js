import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import iconeUsuarios from '../../images/iconeUsuarios.png'
import iconeTempo from '../../images/iconeTempo.png'

const limitarPalavras = (texto, numeroPalavras) => {
    const palavras = texto.split(' ');
    return palavras.slice(0, numeroPalavras).join(' ') + '...';
  };

const Modulos = () => {
    const [cursos, setCursos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
    const [paginaAtual, setPaginaAtual] = useState(1); 
    const cursosPorPagina = 6;
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://raw.githubusercontent.com/lais-huol/edital-001-23-modulos-educacionais/main/db.json');
            const data = await response.json();

            const cursosData = data.cursos;

            const cursosFormatados = cursosData.map(({ id, titulo, parceiros, matriculados, duracao, avaliacao, capa, sobre, cateroria }) => ({
              id,
              titulo,
              parceiros,
              matriculados,
              duracao,
              avaliacao,
              capa,
              sobre,
              cateroria
            }));
    
            setCursos(cursosFormatados);

            const categoriasUnicas = Array.from(new Set(cursosFormatados.map(curso => curso.cateroria)));
            setCategorias(categoriasUnicas);
          } catch (error) {
            console.error('Erro ao buscar dados da API:', error);
          }
        };
    
        fetchData();
      }, []);

      const filtrarCursosPorCategoria = () => {
        if (!categoriaSelecionada) {
          return cursos; 
        }
    
        return cursos.filter(curso => curso.cateroria === categoriaSelecionada);
      };

      const obterCursosDaPaginaAtual = () => {
        const cursosFiltrados = filtrarCursosPorCategoria();
        const indiceInicio = (paginaAtual - 1) * cursosPorPagina;
        const indiceFim = indiceInicio + cursosPorPagina;
    
        return cursosFiltrados.slice(indiceInicio, indiceFim);
      };

      const calcularNumeroDePaginas = () => {
        const cursosFiltrados = filtrarCursosPorCategoria();
        return Math.ceil(cursosFiltrados.length / cursosPorPagina);
      };
    
      const handleTrocarPagina = novaPagina => {
        setPaginaAtual(novaPagina);
      };

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
    



  return (
    <div className='containerModulos'>
        <div className='cabecalho'>Início / Cursos <b> / Módulos</b> </div>
        <h1>Módulos Educacionais</h1>
        <div className='containerCategorias'>
            {categorias.map((categoria, index) => (
            <button key={index} onClick={() => setCategoriaSelecionada(categoria)} 
             className={`bttnModulos ${categoria === categoriaSelecionada ? 'selecionada' : ''}`}>
                {categoria}
            </button>
            ))}
            <button onClick={() => setCategoriaSelecionada('')} className={`bttnModulos ${!categoriaSelecionada ? 'selecionada' : ''}`}>Todas as Categorias</button>
        </div>
        <div className='resultados'>
            <span>{obterCursosDaPaginaAtual().length} de {filtrarCursosPorCategoria().length} resultados</span>
        </div>
        <div>
        <ul className='containerCard'>
            {obterCursosDaPaginaAtual().map(curso => (
            <li className='cardCursos' key={curso.id}>
              <Link to={`/curso/${curso.id}`} className='verCurso'>
                <img className='capaCard' src={curso.capa} alt={`Capa do curso ${curso.titulo}`}  />
              </Link>
                <div>
                    <div className='tituloCard'>{curso.titulo}{' '}</div>
                    <div className='parceirosCard'>{curso.parceiros}{' '}</div>
                </div>
                <div className='infoContainer'>
                    <img className='iconeCard' src={iconeUsuarios} alt={'Icone Usuario'}  />
                    <div className='infoCard'>{Number(curso.matriculados).toLocaleString()}{' '}</div>
                    <img className='iconeCard' src={iconeTempo} alt={'Icone Tempo'} />
                    <div className='infoCard'>{curso.duracao}{' '}</div>
                    {renderizarEstrelas(curso.avaliacao)}
                    <div className='infoCard'>{curso.avaliacao.toString().replace('.', ',')}{' '}</div>
                </div>
                <div className='resumoCard'>{limitarPalavras(curso.sobre, 27)}</div>
                <Link to={`/curso/${curso.id}`} className='verCurso'>
                    Ver Curso
                </Link>

            </li>
            ))}
        </ul>
    </div>
    <div>
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

export default Modulos;
