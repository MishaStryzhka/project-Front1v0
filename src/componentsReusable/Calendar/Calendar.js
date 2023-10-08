// import React, {useState } from "react";
import Calendar from 'react-calendar';
import { Wrap } from './Calendar.styled';
// import 'react-calendar/dist/Calendar.css';


const WrapCalendar = ({ value, onChange }) => {
  const handleDateChange = date => {
    console.log('date', date);
    onChange(date);
    console.log(`Обрана дата: ${date}`);
  };
  const date = document.querySelector(".react-calendar__navigation__label__labelText--from")
  const currentDate = document.querySelector(".react-calendar__tile--now")
  const enterDate = document.querySelector(".react-calendar__tile--active")
  const allDays = document.querySelector(".react-calendar__month-view__days")
console.log('currentDate', currentDate)
console.log('enterDate', enterDate)
console.log('allDays', allDays)

if(date?.textContent){
  const correctDate = `${date.textContent.split(" ")[0]}`
  console.log('correctDate', correctDate )
}

if(currentDate){
  currentDate.style.backgroundColor = "rgba(57, 109, 255, 1)";
  currentDate.style.color = "#FFF";
  currentDate.style.borderRadius = "12px"
}

if(enterDate){
  enterDate.style.backgroundColor = "rgba(208, 255, 201, 1)";
  enterDate.style.color = "rgba(0, 24, 92, 1)"
  enterDate.style.borderRadius = "12px"
}


if(allDays){
  allDays.style.borderRadius = "12px"
  allDays.style.backgroundColor = "none"
}
  return (
    <Wrap>
      <Calendar onChange={handleDateChange} value={value} />
    </Wrap>
  );
};

export default WrapCalendar;
