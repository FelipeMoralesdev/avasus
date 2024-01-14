import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import iconeUsuarios from "../../images/iconeUsuarios.png";
import iconeTempo from "../../images/iconeTempo.png";

const Informacoes = () => {
  const { id } = useParams();
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/lais-huol/edital-001-23-modulos-educacionais/main/db.json"
        );
        const data = await response.json();

        const cursosData = data.cursos;

        const cursosFormatados = cursosData.map(
          ({
            id,
            titulo,
            parceiros,
            matriculados,
            duracao,
            avaliacao,
            capa,
            sobre,
            cateroria,
            objetivo_geral,
            objetivo_especifico,
            conteudo,
            recursos_educacionais,
            creditos,
            numero_avaliacoes,
          }) => ({
            id,
            titulo,
            parceiros,
            matriculados,
            duracao,
            avaliacao,
            capa,
            sobre,
            cateroria,
            objetivo_geral,
            objetivo_especifico,
            conteudo,
            recursos_educacionais,
            creditos,
            numero_avaliacoes,
          })
        );

        setCursos(cursosFormatados);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, []);

  const filtrarPorId = () => {
    return cursos.filter((curso) => curso.id == id);
  };

  const renderizarEstrelas = (nota) => {
    const estrelas = [];
    const estrelasPreenchidas = Math.floor(nota);
    const decimalPart = nota % 1;

    for (let i = 0; i < 5; i++) {
      let estiloEstrela = "estrela";

      if (i < estrelasPreenchidas) {
        estiloEstrela += " preenchida";
      } else if (i === estrelasPreenchidas && decimalPart > 0) {
        estiloEstrela += " meia-preenchida";
      }

      estrelas.push(<div key={i} className={estiloEstrela}></div>);
    }

    return <div className="container-estrelas">{estrelas}</div>;
  };

  return (
    <div>
      <div>
        <ul>
          {filtrarPorId().map((curso) => (
            <li key={curso.id}>
                <div className="capa-container">

                    <div className="overlay"></div>
                        <div className="conteudo-informacoes">
                        <div className="infosCapaSecoes">Início / Cursos / Módulos <b> / {curso.titulo}</b></div>
                        <div className="infosCapaTitulo">{curso.titulo}</div>
                        <div className="infosCapaParceiros">{curso.parceiros} </div>
                    </div>
                    <img
                        className="capaInformacoes"
                        src={curso.capa}
                        alt={`Capa do curso ${curso.titulo}`}
                    />
                </div>
              <div className="containerInfos">
                
                <h1>Informações Gerais do Curso</h1>
                <div className="infoContainerInfo">
                  <img
                    className="iconeInfos"
                    src={iconeTempo}
                    alt={"Icone Tempo"}
                  />
                  <div className="infoCardInfo">
                    {curso.duracao.slice(0, -1)} horas{" "}
                  </div>
                  <img
                    className="iconeInfos"
                    src={iconeUsuarios}
                    alt={"Icone Usuario"}
                  />
                  <div className="infoCardInfo">
                    {Number(curso.matriculados).toLocaleString()} alunos
                    matriculados
                  </div>
                  {renderizarEstrelas(curso.avaliacao)}
                  <div className="infoCardInfo">
                    {curso.avaliacao.toString().replace(".", ",")}
                    {" ("}
                    {Number(curso.numero_avaliacoes).toLocaleString()}
                    {" avaliações)"}
                  </div>
                </div>
                <h5>Sobre o Curso</h5>
                <div className="informacoesCurso">{curso.sobre}
                    <h5>Objetivos</h5>

                    <h6>Objetivo Geral</h6>
                    {curso.objetivo_geral}
                    {curso.objetivo_especifico && (
                    <div>
                        <h6>Objetivos Específicos</h6>
                        <p>{curso.objetivo_especifico}</p>
                    </div>
                    )}
                    {curso.recursos_educacionais && (
                    <div>
                        <h5>Recursos Educacionais</h5>
                        <p>{curso.recursos_educacionais}</p>
                    </div>
                    )}
                    {curso.conteudo && curso.conteudo.length > 0 && curso.conteudo.some(item => item !== null)  && (
                    <div>
                        <h5>Conteúdo</h5>
                        <ul>
                        {curso.conteudo.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                        </ul>
                    </div>
                    )}
                    <div>
                    <h5>Créditos</h5>
                    <div className="creditos-container">
                        {curso.creditos.map((credito, index) => (
                        <div key={index} className="credito-item">
                            <img src={credito.capa} alt={credito.titulo} />
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Informacoes;
