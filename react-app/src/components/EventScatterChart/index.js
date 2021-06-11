import React from 'react';
import { Scatter } from 'react-chartjs-2';
import "./EventScatterChart.css";

const data = {
  datasets: [{
    label: "My First dataset",
    data: [{
      x: 49,
      y: 49
    }, {
      x: 31,
      y: 78
    }],
    showLine: true,
    backgroundColor: 'rgb(0, 143, 200)',
  }, {
    type: "scatter",
    label: "My Second dataset",
    data: [{
      x: 31,
      y: 78
    }, {
      x: 51,
      y: 75
    }],
    showLine: true,
    backgroundColor: 'rgb(0, 143, 200)',
  }, {
    label: 'Line Dataset 1',
    data: [{
      x: 51,
      y: 75
    }, {
      x: 35,
      y: 71
    }],
    showLine: true,
    backgroundColor: 'rgb(0, 143, 200)',
  }, {
    label: 'Line Dataset 2',
    data: [{
      x: 35,
      y: 71
    }, {
      x: 41,
      y: 95
    }],
    showLine: true,
    backgroundColor: 'rgb(0, 143, 200)',
  }, {
    label: 'Line Dataset 2',
    data: [{
      x: 35,
      y: 71
    }, {
      x: 41,
      y: 95
    }],
    showLine: true,
    backgroundColor: 'rgb(0, 143, 200)',
  }]
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
        beginAtZero: true,
        steps: 100,
        max: 100,
        stepValue: 1,
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
        beginAtZero: true,
        steps: 100,
        max: 100,
        stepValue: 1,
        display: false
      }
    },
  },
  plugins: {
    legend: {
      display: false
    },
    datalabels: {
      display: false
    },
  },
  interaction: {
    intersect: false,
    mode: 'index',
  },
  responsive:true,
  maintainAspectRatio: false,
  events: []
};

function EventScatterChart() {
    
    return(
        <div className="event-chart-wrapper">
            <Scatter data={data} options={options} />
        </div>
    )
}

export default EventScatterChart;