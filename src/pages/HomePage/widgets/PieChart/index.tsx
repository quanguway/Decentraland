import ReactApexChart from 'react-apexcharts';
import ApexCharts from 'apexcharts';
import { Box } from '@mui/material';


const PieChart = () => {

  const option: ApexCharts.ApexOptions = {
    chart: {
      width: 380,
      type: 'pie',
    },
    legend: {
      position: 'bottom'
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
      }
    }]
  };
  const series = [25, 15, 44, 55, 41, 17];


  return (
    <Box padding={32}>
      <ReactApexChart options={option} series={series} type="pie" />
    </Box>
    
  );
};

export default PieChart;