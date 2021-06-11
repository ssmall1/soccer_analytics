import React from 'react';
import { Line } from 'react-chartjs-2';
import "./EventLineChart.css";

const rand = () => Math.round(Math.random() * 20 - 10);

const data = {
  datasets: [
    {
      label: '',
      data: [
        { x: 49, y: 49 },
        { x: 31, y: 78 },
      ],
      pointColor: 'rgb(0, 143, 200)',
    },
  ],
};

const options = {
  scales: {
    xAxes: {
      grid: {
        display: false,
      },
      gridLines: {
        display: true,
        color: 'rgb(255,255,255)',
      },
      ticks: {
        display: false
      }
    },
    yAxes: {
      grid: {
        display: false,
      },
      gridLines: {
        display: true,
        color: 'rgb(255,255,255)',
      },
      ticks: {
        display: false,
        beginAtZero: true,
      }
    },
  },
  responsive:true,
  maintainAspectRatio: false
};

function EventLineChart() {
    
    return(
        <div className="event-chart-wrapper">
            <Line data={data} options={options} />
        </div>
    )
}

export default EventLineChart;