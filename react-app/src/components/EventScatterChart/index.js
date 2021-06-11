import React from 'react';
import { Scatter } from 'react-chartjs-2';
import "./EventScatterChart.css";

const rand = () => Math.round(Math.random() * 20 - 10);

const data = {
  datasets: [
    {
      label: '',
      data: [
        { x: 49, y: 49 },
        { x: 31, y: 78 },
        // { x: , y:  },
        // { x: , y:  },
        // { x: , y:  },
        // { x: , y:  },
        // { x: , y:  },
        // { x: , y:  },
        // { x: , y:  },
        // { x: , y:  },
        // { x: , y:  },
        // { x: , y:  },
        // { x: , y:  },
        // { x: , y:  },
      ],
      backgroundColor: 'rgb(0, 143, 200)',
      showLine: true,
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
  legend: {
    display: false
  },
  datalabels: {
    display: false
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