import Calendar from 'react-calendar';
import { Wrap } from './Calendar.styled';

const lastDay = document.querySelector(".react-calendar__month-view__days__day")
lastDay && console.log('lastDay', lastDay)


const WrapCalendar = ({ value, onChange }) => {
  const handleDateChange = date => {
    onChange(date);
  };
  if(lastDay)
    if (lastDay.getAttribute('disabled') === 'false') {
      lastDay.classList.add('component')
      // ay.style.color ='tomato !important';
  }
  return (
    <Wrap>
      <Calendar onChange={handleDateChange} value={value} minDate={new Date()} />
      {/* <p>Обрана дата: {value.toLocaleDateString()}</p> */}
    </Wrap>
  );
};

export default WrapCalendar;
