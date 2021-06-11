import React, { useEffect, useState } from "react";
import { Scatter } from 'react-chartjs-2';
import { useDispatch, useSelector } from "react-redux";
import * as eventsReducer from "../../store/events"
import "./EventScatterChart.css";


function EventScatterChart({ matchKey }) {
  const dispatch = useDispatch();

  const typeEvents = useSelector(state => state.events.typeMatchEvents)

  useEffect(()=> {
    dispatch(eventsReducer.getTypeMatchEvents(matchKey));
  }, [dispatch])

  if (!typeEvents) return null;

  const data = {
    datasets:
      typeEvents.map((typeEvent) => {
        return {
        label: `${typeEvent.event_sec}`,
        data: [{
          x: typeEvent.x_start,
          y: typeEvent.y_start,
        }, {
          x: null,
          y: null
        }],
        showLine: true,
        backgroundColor: 'rgb(0, 143, 200)',
      }
      })
  }

  console.log("data", data)

  const data1 = {
    datasets: [{
      label: "1",
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
      label: "2",
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
      label: '3',
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
      label: '4',
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
      label: '5',
      data: [{
        x: 41,
        y: 95
      }, {
        x: 72,
        y: 88
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

  console.log("data1", data1)

    return(
        <div className="event-chart-wrapper">
            <Scatter data={data} options={options} />
        </div>
    )
}

export default EventScatterChart;