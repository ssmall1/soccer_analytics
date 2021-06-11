import React from 'react';
import { Scatter } from 'react-chartjs-2';
import "./EventScatterChart.css";

const rand = () => Math.round(Math.random() * 20 - 10);

const data = {
  datasets: [
    {
      label: '',
      data: [
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
      ],
      pointColor: 'rgba(0, 143, 200)',
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

function EventScatterChart() {
    
    return(
        <div className="event-chart-wrapper">
            <Scatter data={data} options={options} />
        </div>
    )
}

export default EventScatterChart;