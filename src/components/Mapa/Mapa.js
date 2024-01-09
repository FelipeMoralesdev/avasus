import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Highcharts from 'highcharts';
import HighchartsMap from 'highcharts/modules/map';

HighchartsMap(Highcharts);

const Mapa = () => {
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mapResponse = await axios.get(
          'https://code.highcharts.com/mapdata/countries/br/br-all.topo.json'
        );

        const apiResponse = await axios.get(
            'https://raw.githubusercontent.com/lais-huol/edital-001-23-modulos-educacionais/main/db.json'
        );

        const data = apiResponse.data.transparecia.usuarios_por_estado.map((estado) => {
          return [`br-${estado.estados.toLowerCase()}`, estado.usuarios_totais];
        });

        setMapData({
          map: mapResponse.data,
          data: data,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (mapData) {
      Highcharts.mapChart('container', {
        chart: {
          map: mapData.map,
        },
        title: {
          text: '',
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom',
          },
        },
        colorAxis: {
          minColor: '#FFAAAA',
          maxColor: '#FF0000',
          stops: [
            [0, '#FFAAAA'],
            [0.5, '#FF5555'],
            [1, '#FF0000'],
          ],
        },
        series: [
          {
            data: mapData.data,
            name: 'Usuários Totais',
            states: { hover: { color: '' } },
            dataLabels: { enabled: true, format: '{point.name}' },
          },
        ],

      });
    }
  }, [mapData]);

  return <div id="container" style={{ width: '100%', height: '500px' }}></div>;
};

export default Mapa;
