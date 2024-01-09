import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const Grafico = () => {
  const [dadosTransparencia, setDadosTransparencia] = useState(null);

  useEffect(() => {
    const fetchDadosTransparencia = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/lais-huol/edital-001-23-modulos-educacionais/main/db.json');
        const data = await response.json();
        setDadosTransparencia(data);
      } catch (error) {
        console.error('Erro ao acessar a API:', error);
      }
    };

    fetchDadosTransparencia();
  }, []);

  if (!dadosTransparencia || !dadosTransparencia.transparecia || !dadosTransparencia.transparecia.usuarios_por_curso) {
    return <p>Carregando dados...</p>;
  }

  const labels = dadosTransparencia.transparecia.usuarios_por_curso.map(curso => curso.curso);
  const data = dadosTransparencia.transparecia.usuarios_por_curso.map(curso => curso.usuarios);

  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: [
          '#FFF',
          '#D2202C',
          '#707070',
          '#2F2E41',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
      },
    ],
  };

  return (
    <div>
      <Pie data={chartData}/>
    </div>
  );
};

export default Grafico;
