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
          return [`br-${estado.estados.toLowerCase()}`, estado.usuarios_totais, estado.direito_certificacao];
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
          backgroundColor: '#F5F5F7',
          borderRadius: '20px',
          marginTop: '0',
          marginRight: '0',
          marginBottom: '0',
          marginLeft: '0',
        },

        title: {
          text: '',
        },

        legend: {
          enabled: false
        },

        mapNavigation: {
          enabled: false,
       
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
            name: '',
            states: { hover: { color: '' } },
            dataLabels: { enabled: true, format: '' },
            tooltip: {
              pointFormatter: function() {
                var index = this.index;
                var direitoCertificacao = mapData.data[index][2];


                return `<b>${this.name}</b><br/>Usuários Totais: ${Number(this.value).toLocaleString()}<br/>Direito à Certificação: ${Number(direitoCertificacao).toLocaleString()}`;
              }
            
            }
          },
        ],

      });
    }
  
}, [mapData]);


  return <div id="container" style={{ width: '100%', height: '350px' }}></div>;
  
};

export default Mapa;
