import Calendar from 'react-calendar';
import { Wrap } from './Calendar.styled';


const WrapCalendar = ({ value, onChange }) => {
  const handleDateChange = date => {
    onChange(date);
  };
  return (
    <Wrap>
      <Calendar onChange={handleDateChange} value={value} minDate={new Date()} />
      {/* <p>Обрана дата: {value.toLocaleDateString()}</p> */}
    </Wrap>
  );
};

export default WrapCalendar;
