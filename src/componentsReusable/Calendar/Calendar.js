// import React, {useState } from "react";
import Calendar from 'react-calendar';
import { Wrap } from "./Calendar.styled";
import 'react-calendar/dist/Calendar.css';

const WrapCalendar = ({value, onChange}) => {
  // const [value, onChange] = useState(new Date());

  const handleDateChange = (date) => {
    console.log('date', date)
    onChange(date);
    console.log(`Обрана дата: ${date}`);
  };
  
  return (
    <Wrap>
      <Calendar onChange={handleDateChange} value={value} />
      {/* <p>Обрана дата: {value.toLocaleDateString()}</p> */}
     </Wrap>
  );
};

export default WrapCalendar;
