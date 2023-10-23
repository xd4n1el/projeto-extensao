import styled from 'styled-components';
import tw from 'twin.macro';

import ReactApexChart from 'react-apexcharts';

const Container = styled.div`
  ${tw`w-full h-auto flex relative !p-0 !m-0`}

  & > * {
    ${tw`w-full h-full`}
  }
`;

const type = 'bar';
const countries = ['Iraque', 'Paquistão', 'França', 'Brasil', 'Canadá'];
const years = [2016, 2017, 2019, 2020, 2021];
const temperatures = [53.9, 53.7, 46, 44.8, 49.6];

const series = [
  {
    name: 'Temperatura Máxima Atingida: ',
    data: temperatures,
  },
];

const YearGraphic = () => {
  return (
    <Container>
      <ReactApexChart
        series={series}
        type="bar"
        height="500px"
        width="100%"
        options={{
          chart: {
            type,
            fontFamily: 'Inter, sans-serif',
            animations: {
              enabled: true,
              easing: 'easeinout',
              speed: 1500,
            },
            toolbar: {
              show: false,
            },
          },
          grid: {
            show: false,
          },
          title: {
            text: 'Temperaturas Mais Altas Nos Últimos Anos',
            margin: 20,
            style: {
              color: '#FFA822',
              fontSize: '24px',
              fontWeight: 600,
            },
          },
          colors: ['#FFA822'],
          tooltip: {
            x: {
              formatter: function () {
                return '';
              },
            },
            y: {
              formatter: function (value, { dataPointIndex: index }) {
                const country = countries[index];

                return `${value}° C | ${country}`;
              },
            },
          },
          dataLabels: {
            enabled: true,
            formatter: function (value, { dataPointIndex: index }) {
              const year = years[index];

              return `${value}° C / ${year}`;
            },
          },
          yaxis: {
            labels: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: '50%',
              dataLabels: {
                hideOverflowingLabels: true,
                orientation: 'horizontal',
              },
            },
          },
        }}
      />
    </Container>
  );
};

export default YearGraphic;
