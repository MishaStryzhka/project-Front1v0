import { useAuth } from "hooks";
import { Description, Item, List, TitleDescription, Wrap } from "./DoctorCards.styled";
import { directionListValue } from "helpers/directionsList";
import { hoursOfWorkListValue } from "helpers/hoursOfWorkList";
import { paymentListValue } from "helpers/paymentList";
import { workExperienceListValue } from "helpers/workExperienceList";

const DoctorCard =()=>{
   let {user} = useAuth();
console.log(user);
console.log(workExperienceListValue);
const currentDirections = directionListValue.filter(direction => user.directionsOfWork.includes(direction.id)) 
const workDays = hoursOfWorkListValue.find(day=>day.id === user.jobs[0].workSchedule)
const typesOfPayment = paymentListValue.filter(value =>user.paymentMethods.includes(value.id))
// workExperienceListValue
return(
    <>
    <List>
        <Item>
            <TitleDescription>Спеціалізація:</TitleDescription>
            <div>
      {currentDirections.map(({id, name})=>{
       return <Description key={id}>{name}</Description>
      })} 
           </div>    
        </Item>
        <Item>
            <TitleDescription>Стаж роботи:</TitleDescription>
            <Description>{user.experienceYears}</Description>
        </Item>
        <Item>
            <TitleDescription>Освіта:</TitleDescription>
            <Wrap>
            <Description>{user.educations[0].name}</Description>
            <Description><span>{user.educations[0].years.begin}</span> - <span>{user.educations[0].years.end}</span></Description>
            </Wrap>
        </Item>
        <Item>
            <TitleDescription>Місце роботи:</TitleDescription>
            <Wrap>
            <Description>{user.jobs[0].name}</Description>
            <Description>{user.jobs[0].address}</Description>
            <Description>{workDays.name}</Description>
            <p></p>
            </Wrap>
        </Item>
        <Item>
            <TitleDescription>Проблеми, які лікує:</TitleDescription>
            <p></p>
        </Item>
         <Item>
            <TitleDescription>Спосіб оплати:</TitleDescription>
            <div>
                {typesOfPayment.map(({id, name})=>{
                    return <Description key={id}>{name}</Description>
                })}
            </div>
            
        </Item>
        <Item>
            <TitleDescription>Соціальні мережі:</TitleDescription>
            <Description>Соціальні мережі</Description>
        </Item>
        <Item>
            <TitleDescription>Зв'язатись з лікарем:</TitleDescription>
            <Description>Контакти</Description>
        </Item>
        <Item>
            <TitleDescription>Оцінити лікаря:</TitleDescription>
            <Description>Оцінка</Description>
        </Item>
    </List>
  </>
);
};
export default DoctorCard