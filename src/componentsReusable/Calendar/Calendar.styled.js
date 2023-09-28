import { styled } from 'styled-components';

export const Wrap = styled.div`
padding:10px;
display:flex;
justify-content:center;
align-items:center;
/* min-height:480px; */
.react-calendar__navigation {
    display: flex;
    padding: 10px 4px;
    margin-bottom:14px;
    }
    .react-calendar__navigation__label {
        font-family: "Rubik";
        font-size: 16px;
        text-align: center;
        font-weight: 400;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
    
    .react-calendar__month-view__weekdays {
    text-align: center;
    text-decoration:none;
    margin-bottom: 14px;
    line-height:1.5;
    font-family: "Rubik";
    font-size: 16px;
    font-weight: 400;
    color:#00185C;
   }
  

.react-calendar__month-view__weekdays::first-letter {
    text-transform: uppercase;
  }

  .button {
    /* margin: 3px; */
    background-color: transparent;
    border: transparent;
    border-radius: 3px;
    color: white;
    padding: 5px 0;

    &:hover {
      background-color: #556b55;
    }

    &:active {
      background-color: #a5c1a5;
    }
  }

  .react-calendar__month-view__days{
    font-family: "Rubik";
    font-size: 16px;
    font-weight: 400;
    display: grid !important;
    grid-template-columns: 40px 40px 40px 40px 40px 40px 40px;
    grid-template-rows: 40px 40px 40px 40px 40px 40px 40px;
    color:#00185C !important;
   }
   .react-calendar__tile {
      max-width: initial !important;
    }`