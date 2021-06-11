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
          x: typeEvent.event_name === "Shot" ? null : typeEvent.x_end,
          y: typeEvent.event_name === "Shot" ? null : typeEvent.y_end
        }],
        showLine: true,
        backgroundColor: 'rgb(0, 143, 200)',
        pointRadius: 7,
      }
      })
  }

  // console.log("data", data)
  
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

    return(
        <div className="event-chart-wrapper">
            <Scatter data={data} options={options} />
        </div>
    )
}

export default EventScatterChart;