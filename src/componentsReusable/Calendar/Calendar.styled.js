import { styled } from 'styled-components';

export const Wrap = styled.div`
padding:10px;
display:flex;
justify-content:center;
align-items:center;
.react-calendar__navigation {
    display: flex;
    justify-content: center;
    padding: 10px 4px;
    }
.react-calendar__navigation__label {
        font-family: "Rubik";
        font-size: 16px;
        font-weight: 400;
        text-transform: capitalize;
        display: flex;
        justify-content:center;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
    
    .react-calendar__month-view__weekdays {
    text-align: center;
    text-decoration:none;
    border:none;
    margin-bottom: 14px;
    line-height:1.5;
    font-family: "Rubik";
    font-size: 16px;
    font-weight: 400;
    color:#00185C;
   }

   .react-calendar__month-view__weekdays__weekday{
    text-transform: capitalize;
    color:rgba(0, 24, 92, 1);
   }
  

  .button {
    background-color: transparent;
    border: transparent;
    border-radius: 3px;
  }

  .react-calendar__month-view__days{
    font-family: "Rubik";
    font-size: 16px;
    font-weight: 400;
    display: grid !important;
    grid-template-columns: 40px 40px 40px 40px 40px 40px 40px;
    grid-template-rows: 40px 40px 40px 40px 40px 40px;
    color:#00185C !important;
   }
   .react-calendar__tile {
      max-width: initial !important;
    }
    
    .react-calendar__month-view__days__day--neighboringMonth{
        color:#BABABA !important;
        pointer-events: none;
    }
    
    .react-calendar__month-view__days__day{
        color:rgba(0, 24, 92, 1);
    }
    
.react-calendar__tile--now{
background-color: rgba(57, 109, 255, 1) !important;
color:white !important;
border-radius:12px;
}

.react-calendar__navigation__label__labelText--from{
    display:flex;
    justify-content:space-between;
}

.react-calendar__year-view__months{
    display:flex;
    flex-direction:column;
}
.react-calendar__year-view__months, 
  .react-calendar__decade-view__years, 
  .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 100%;
    grid-template-rows:  18% 18% 18% 18% 18% 18% 18% 18% 18% 18% 18% 18% ;
  }

  .react-calendar__year-view__months__month{
    text-transform: capitalize;
    color:rgba(0, 24, 92, 1);
    font-family: "Rubik";
    font-size: 16px;
  }

.react-calendar__tile--active{
background-color:  #DEFFD9;
border-radius:12px;
color:rgba(0, 24, 92, 1);
}

.react-calendar__year-view__months__month{
  display:block;
  width:300px;
}
.react-calendar__decade-view__years__year{
  display:block;
  width:300px;
}
.react-calendar__decade-view__years__year:hover{
    background-color:  #DEFFD9;
    color:rgba(0, 24, 92, 1);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), 
  color 250ms cubic-bezier(0.4, 0, 0.2, 1),
  }

.react-calendar__year-view__months__month:hover{
  background-color:  #DEFFD9;
  color:rgba(0, 24, 92, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), 
  color 250ms cubic-bezier(0.4, 0, 0.2, 1),
}

.react-calendar__month-view__days__day:hover{
  background-color:  #DEFFD9;
  color:rgba(0, 24, 92, 1);
  border-radius:12px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), 
  color 250ms cubic-bezier(0.4, 0, 0.2, 1),
  border-radius 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

`

