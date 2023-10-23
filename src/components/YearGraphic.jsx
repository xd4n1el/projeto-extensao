import styled from 'styled-components';
import tw from 'twin.macro';

import ReactApexChart from 'react-apexcharts';

const Container = styled.div`
  ${tw`w-full h-auto flex border border-red-600 relative !p-0 !m-0`}

  & > * {
    ${tw`w-full h-full`}
  }
`;

const type = 'bar';
const years = [2018, 2019, 2020, 2021];
const temperatures = [47.2, 44.6, 56.7, 44.4];

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
        height="1000px"
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
          tooltip: {
            x: {
              formatter: function () {
                return '';
              },
            },
            y: {
              formatter: function (value) {
                return `${value}° C`;
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
