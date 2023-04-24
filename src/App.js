import './App.css';

import React from "react";
import {useState} from 'react';

import MultipleSelect from './date1';
import LineChart from "./linechart";
import { ways } from './date1';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';

import PieChart from './piechart';
import moment from 'moment/moment';
// get our fontawesome imports

function build(){
  
    
    let data_day2 = document.querySelector('.date2').value;
    let data_hours = document.querySelector('.hours').value;
    let data_minutes = document.querySelector('.minutes').value;
    let data_secounds = document.querySelector('.secounds').value;
    let data_ways = document.querySelector('.ways').value;
    
    document.querySelector('.day1').innerHTML = data_day1;
};







let data_day1 ='';
let data_day2 ='';

function App() {

  
  
  return (
    
      <div className="App">
      <header className="App-header">
        
        <div className="form-box">
        <label>Период</label>
        <label>c</label> 
        <TextField
        id="date1"
        type="date"
        size="small"
        defaultValue="2023-04-24"
        InputLabelProps={{
          shrink: true,
        }}
      /> 
        <label>до</label>
        <TextField
        id="date2"
        type="date"
        size="small"
        defaultValue="2023-04-25"
        InputLabelProps={{
          shrink: true,
        }}
      /> 
        <label>Интервал:</label>
         
        <select className = "hours" >
          <option value ="1">1</option>
          <option value ="2">2</option>
          <option value ="3">3</option>
          <option value ="4">4</option>
          <option value ="6">6</option>
          <option value ="12">12</option>
        </select> 
        <label>час</label>
        <select className = "minutes">
          <option value ="0">0</option>
          <option value ="1">1</option>
          <option value ="5">5</option>
          <option value ="10">10</option>
          <option value ="20">20</option>
          <option value ="30">30</option>
        </select>
        <label>мин</label> 
        <select className = "seconds">
          <option value ="0">0</option>
          <option value ="1">1</option>
          <option value ="5">5</option>
          <option value ="10">10</option>
          <option value ="20">20</option>
          <option value ="30">30</option>
        </select> 
        <label>сек</label>
        
        <span className="container">
        <label>Направление:</label>
        
      

        <MultipleSelect className='way'/>

        </span>
        <div ><Button className="build" size="small"  color='primary' variant="text" onClick={() => {
          data_day1 = document.querySelector('#date1').value;
          data_day2 = document.querySelector('#date2').value;
          let data_hours = document.querySelector('.hours').value;
          let data_minutes = document.querySelector('.minutes').value;
          let data_seconds = document.querySelector('.seconds').value;
          //let ways = document.querySelectorAll('.ways').value;
          document.querySelector('.day1').innerHTML = data_day1;
          document.querySelector('.day2').innerHTML = data_day2;
          document.querySelector('.firstday').innerHTML = data_day1;
          document.querySelector('.lastday').innerHTML = data_day2;
          //LineChart({ isDashboard : true } );
          let time = moment(data_day2)-moment(data_day1);
          time = moment.duration(time, 'milliseconds').asHours() / ;
        }}>Построить</Button>
        
        </div>
        
        
        
      </div>
      </header>
      
        <div className='line' id = 'myDiv' height="500px"> Средняя скорость c  
         <span className='day1'></span> до 
         <span className='day2'></span>
          <LineChart isDashboard={true} />
        </div>
        

        <div className='pie' height="500px"> Состав потока c 
        <span className='firstday'></span> до 
         <span className='lastday'></span>
          <PieChart isDashboard={true} />
      </div>
      
    </div>
  );
};





export default App;


