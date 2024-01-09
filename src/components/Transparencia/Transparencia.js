import React, { useEffect, useState } from "react";
import "./style.css";
import Grafico from "../Grafico/Grafico";
import Mapa from "../Mapa/Mapa"
import iconeUsuarios from "../../images/iconeUsuarios.png";
import iconeCursos from "../../images/iconeCursos.png";
import iconeCertificados from "../../images/iconeCertificados.png";
import iconeInscricoes from "../../images/iconeInscricoes.png";
import iconeInvestimentoCurso from "../../images/iconeInvestimentoCurso.png";
import iconeInvestimentoAluno from "../../images/iconeInvestimentoAluno.png";

const Transparencia = () => {
  const [dadosTransparencia, setDadosTransparencia] = useState(null);
  const cores = ['#FFF',
  '#D2202C',
  '#707070',
  '#2F2E41',
  'rgba(153, 102, 255, 0.6)',
  'rgba(255, 159, 64, 0.6)'];

  useEffect(() => {
    const fetchDadosTransparencia = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/lais-huol/edital-001-23-modulos-educacionais/main/db.json"
        );

        const data = await response.json();
        setDadosTransparencia(data);
      } catch (error) {
        console.error("Erro ao acessar a API:", error);
      }
    };

    fetchDadosTransparencia();
  }, []);

  return (
    <div className="containerTransparencia">
      <div className="cabecalho">Início / Transparência </div>
      <h1>Transparência</h1>
      {dadosTransparencia && (
        <div>
          <div className="fundoDadosGerais">
            <h3>Dados Gerais</h3>
            <div className="containerDadosGerais">
              <div className="blocoDadosGerais">
                <div className="tituloBlocos">
                  <img
                    className="iconeDados"
                    src={iconeUsuarios}
                    alt={"Icone Usuario"}
                  />
                  <p>Total de usuários registrados:</p>
                </div>
                <div className="formatarDado">
                  {Number(dadosTransparencia.transparecia.dados_gerais.usuarios_registrados
                  ).toLocaleString()}
                </div>
              </div>

              <div className="blocoDadosGerais">
                <div className="tituloBlocos">
                  <img
                    className="iconeDados"
                    src={iconeInscricoes}
                    alt={"Icone Usuario"}
                  />
                  <p>Inscrições realizadas:</p>
                </div>
                <div className="formatarDado">
                  {Number(dadosTransparencia.transparecia.dados_gerais.incricoes_realizadas).toLocaleString()}
                </div>
              </div>

              <div className="blocoDadosGerais">
                <div className="tituloBlocos">
                  <img
                    className="iconeDados"
                    src={iconeCursos}
                    alt={"Icone Usuario"}
                  />
                  <p>Cursos ativos:</p>
                </div>
                <div className="formatarDado">
                  {Number(dadosTransparencia.transparecia.dados_gerais.cursos_ativos).toLocaleString()}
                </div>
              </div>

              <div className="blocoDadosGerais">
                <div className="tituloBlocos">
                  <img
                    className="iconeDados"
                    src={iconeCertificados}
                    alt={"Icone Usuario"}
                  />
                  <p>Direito à Certificação:</p>
                </div>
                <div className="formatarDado">
                  {Number(dadosTransparencia.transparecia.dados_gerais.direito_certificacao).toLocaleString()}
                </div>
              </div>

              <div className="blocoDadosGerais">
                <div className="tituloBlocos">
                  <img
                    className="iconeDados"
                    src={iconeInvestimentoCurso}
                    alt={"Icone Usuario"}
                  />
                  <p>Investimento médio por curso:</p>
                </div>
                <div className="formatarDado">
                  {dadosTransparencia.transparecia.dados_gerais.investimento_medio_curso}
                </div>
              </div>

              <div className="blocoDadosGerais">
                <div className="tituloBlocos">
                  <img
                    className="iconeDados"
                    src={iconeInvestimentoAluno}
                    alt={"Icone Usuario"}
                  />
                  <p>Investimento médio por aluno:</p>
                </div>
                <div className="formatarDado">
                  {
                    dadosTransparencia.transparecia.dados_gerais
                      .investimento_medio_aluno
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="containerInferior">
            <div className="usuarioCurso">
                <h2>Usuários por Curso</h2>
                <div className="grafico">
                    <Grafico />
                </div>
                
                {dadosTransparencia.transparecia.usuarios_por_curso.map((curso, index) => (
                    <div className="legendaCurso" key={curso.curso} style={{ display: 'flex', alignItems: 'center', paddingTop: '2%' }}>
                    <div className="bolinha"
                    style={{
                        width: '15px',
                        height: '15px',
                        borderRadius: '50%',
                        backgroundColor: cores[index % cores.length],
                        marginRight: '5%',
                        marginLeft: '10%',
                        border: '1px solid black'
                    }}
                    ></div>
                    {curso.curso}: {Number(curso.usuarios).toLocaleString()}
                    </div>
            ))}
            </div>
            <div className="usuarioEstado">
                    <h2>Usuários por Estado</h2>
                    <Mapa/>
            </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Transparencia;
