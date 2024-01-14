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
      <div className="cabecalho">Início <b>/ Transparência </b></div>
      <h1>Transparência</h1>
      {dadosTransparencia && (
        <div>
          <div className="fundoDadosGerais">
            <h3>Dados Gerais</h3>
            <div className="containerDadosGerais">

              <div className="blocoDadosGerais">
                <div className="tituloBlocos">
                  <img className="iconeDados" src={iconeUsuarios} alt={"Icone Usuario"}/>
                  <div className="formatarTitulo">Total de usuários registrados:</div>
                </div>
                  <div className="formatarDado">{Number(dadosTransparencia.transparecia.dados_gerais.usuarios_registrados).toLocaleString()}
                </div>
               </div>

              <div className="blocoDadosGerais">
                <div className="tituloBlocos">
                  <img className="iconeDados" src={iconeInscricoes} alt={"Icone Usuario"}/>
                  <div className="formatarTitulo">Inscrições realizadas:</div>
                </div>
                <div className="formatarDado">
                  {Number(dadosTransparencia.transparecia.dados_gerais.incricoes_realizadas).toLocaleString()}
                </div>
              </div>

              <div className="blocoDadosGerais">
                <div className="tituloBlocos">
                  <img className="iconeDados" src={iconeCursos} alt={"Icone Usuario"} />
                  <div className="formatarTitulo">Cursos ativos:</div>
                </div>
                <div className="formatarDado">
                  {Number(dadosTransparencia.transparecia.dados_gerais.cursos_ativos).toLocaleString()}
                </div>
              </div>

              <div className="blocoDadosGerais">
                <div className="tituloBlocos">
                  <img className="iconeDados" src={iconeCertificados} alt={"Icone Usuario"} />
                  <div className="formatarTitulo">Direito à Certificação:</div>
                </div>
                <div className="formatarDado">
                  {Number(dadosTransparencia.transparecia.dados_gerais.direito_certificacao).toLocaleString()}
                </div>
              </div>

              <div className="blocoDadosGerais">
                <div className="tituloBlocos">
                  <img className="iconeDados" src={iconeInvestimentoCurso} alt={"Icone Usuario"} />
                  <div className="formatarTitulo">Investimento médio por curso:</div>
                </div>
                <div className="formatarDado">
                  {dadosTransparencia.transparecia.dados_gerais.investimento_medio_curso}
                </div>
              </div>

              <div className="blocoDadosGerais">
                <div className="tituloBlocos">
                  <img className="iconeDados" src={iconeInvestimentoAluno} alt={"Icone Usuario"} />
                  <div className="formatarTitulo">Investimento médio por aluno:</div>
                </div>
                <div className="formatarDado">
                  {dadosTransparencia.transparecia.dados_gerais.investimento_medio_aluno}
                </div>
              </div>
            </div>
          </div>

          <div className="containerInferior">
            <div className="usuarioCurso">
                <h3>Usuários por Curso</h3>

                  <div className="grafico">
                      <Grafico/>
                  </div>
                  {dadosTransparencia.transparecia.usuarios_por_curso.map((curso, index) => (
                      <div className="legendaCurso" key={curso.curso} style={{ display: 'flex', alignItems: 'center', paddingTop: '2%' }}>
                      <div className="bolinha" style={{backgroundColor: cores[index % cores.length]}}></div>
                      {curso.curso}: {Number(curso.usuarios).toLocaleString()}
                      </div>
                    ))}

            </div>
            <div className="usuarioEstado">
                    <h3>Usuários por Estado</h3>
                      <div className="mapa">
                        <Mapa />
                      </div>

                        <div className="legendaMapa">
                          <div className="bolinha" style={{backgroundColor: '#FFA6A6' }}></div>
                          <div>Até 50 mil usuários</div>
                        </div>

                        <div className="legendaMapa">
                          <div className="bolinha" style={{backgroundColor: '#FF7676' }}></div>
                          <div>Até 100 mil usuários</div>
                        </div>

                        <div className="legendaMapa">
                          <div className="bolinha" style={{backgroundColor: '#FF5656' }}></div>
                          <div>Até 150 mil usuários</div>
                        </div>

                        <div className="legendaMapa">
                          <div className="bolinha" style={{backgroundColor: '#FF2E2E' }}></div>
                          <div>Até 200 mil usuários</div>
                        </div>

                        <div className="legendaMapa">
                          <div className="bolinha" style={{backgroundColor: '#FF0909' }}></div>
                          <div>Mais de 200 mil usuários</div>
                        </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transparencia;
