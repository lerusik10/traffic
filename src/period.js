import './App.css';

import React from "react";
import { render } from "react-dom";

import { faChevronDown,faCheck  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Period() {
  const selectBtn = document.querySelector('.ways'),
  items = document.querySelectorAll('.item');

  selectBtn.addEventListener("click", () => {
  selectBtn.classList.toggle("open");
});

items.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("checked");

    let checked =document.querySelectorAll("checked"), 
      btnText = document.querySelector(".btn-text");
      console.log(checked,btnText)
  });
});
  return (
    <div className="App">
      <header className="App-header">
        
        <div className="form-box">
        <label>Период</label>
        <label>c</label> 
        <input type="date" id="date1"/> 
        <label>до</label>
        <input type="date" class="date2"/> 
        <label>Интервал:</label>
         
        <select className = "hours" >
          <option value ="1">1</option>
          <option value ="2">2</option>
          <option value ="3">3</option>
          <option value ="4">4</option>
          <option value ="5">5</option>
          <option value ="6">6</option>
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
        
        <div className="container">
        <label>Направление:</label>
          <span className='ways'>
          <span className="btn-text">Направления</span>
            <span class="arrow-dwn">
              <FontAwesomeIcon icon={faChevronDown} size='0.01x' />
            </span>
          </span>
          
            <ul className="list-items">
              <li className="item">
                <span className="checkbox">
                  <FontAwesomeIcon icon={faCheck} class = 'check-icon'size='0.1x' fixedWidth />
                </span>
                <span className="item-text">Направление 1</span>

              </li>
              <li className="item">
                <span className="checkbox">
                  <FontAwesomeIcon icon={faCheck} class = 'check-icon' size='0.1x' fixedWidth />
                </span>
                <span className="item-text">Направление 2</span>

              </li>
              <li className="item">
                <span className="checkbox">
                  <FontAwesomeIcon icon={faCheck} class = 'check-icon' size='0.1x' fixedWidth />
                </span>
                <span className="item-text">Направление 3</span>

              </li>
              <li className="item">
                <span className="checkbox">
                  <FontAwesomeIcon icon={faCheck} class = 'check-icon' size='0.1x' fixedWidth />
                </span>
                <span className="item-text">Направление 4</span>

              </li>
              <li className="item">
                <span className="checkbox">
                  <FontAwesomeIcon icon={faCheck} class = 'check-icon' size='0.1x' fixedWidth />
                </span>
                <span className="item-text">Направление 5</span>

              </li>
            </ul>
        </div>
          
        <button className="build">Построить</button>
        
      </div>
      </header>
    </div>
  );
};





export default Period;


