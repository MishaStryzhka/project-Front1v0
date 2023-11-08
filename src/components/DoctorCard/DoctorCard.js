import { useAuth } from 'hooks';
import {
  Description,
  Item,
  ItemProblems,
  List,
  ListProblems,
  TitleDescription,
  Wrap,
  WrapSocialLink,
} from './DoctorCards.styled';
import { directionListValue } from 'helpers/directionsList';
import { hoursOfWorkListValue } from 'helpers/hoursOfWorkList';
import { paymentListValue } from 'helpers/paymentList';
import { problemsListValue } from 'helpers/problemsList';
import IconInstagram from 'images/icons/IconInstagram';
import IconTikTok from 'images/icons/IconTikTok';
import IconPhone from 'images/icons/IconPhone';
import IconSocialMedia from 'images/icons/IconSocialMedia';
import IconTelegram from 'images/icons/IconTelegram';
import IconMessages from 'images/icons/IconMessages';

const DoctorCard = () => {
  let { user } = useAuth();
  console.log(user);
  const currentDirections = directionListValue.filter(
    direction =>
      user.directionsOfWork && user.directionsOfWork.includes(direction.id)
  );
  const workDays = hoursOfWorkListValue.find(
    day => day.id === user.jobs[0].workSchedule
  );
  const typesOfPayment = paymentListValue.filter(value =>
    user.paymentMethods.includes(value.id)
  );

  const allProblems = [];
  problemsListValue.forEach(category => {
    allProblems.push(...category.problems);
  });
  const allProblemsBack = Object.keys(user.problemsItSolves);
  const currentProblems = allProblems.filter(problem =>
    allProblemsBack.includes(problem.id)
  );
  const numberPhone = user.phones[0];
  return (
    <>
      <List>
        <Item>
          <TitleDescription>Спеціалізація:</TitleDescription>
          <div>
            {currentDirections.map(({ id, name }) => {
              return <Description key={id}>{name}</Description>;
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
            <Description>
              <span>{user.educations[0].years.begin}</span> -{' '}
              <span>{user.educations[0].years.end}</span>
            </Description>
          </Wrap>
        </Item>
        <Item>
          <TitleDescription>Місце роботи:</TitleDescription>
          <Wrap>
            <Description>{user.jobs[0].name}</Description>
            <Description>{user.jobs[0].address}</Description>
            <Description>{workDays?.name}</Description>
          </Wrap>
        </Item>
        <Item>
          <TitleDescription>Проблеми, які лікує:</TitleDescription>
          <ListProblems>
            {currentProblems.map(({ id, name_ua }) => {
              return (
                <ItemProblems key={id}>
                  <Description>{name_ua}</Description>
                  {user.problemsItSolves[id] && (
                    <Description>{user.problemsItSolves[id]}</Description>
                  )}
                </ItemProblems>
              );
            })}
          </ListProblems>
        </Item>
        <Item>
          <TitleDescription>Спосіб оплати:</TitleDescription>
          <div>
            {typesOfPayment.map(({ id, name }) => {
              return <Description key={id}>{name}</Description>;
            })}
          </div>
        </Item>
        <Item>
          <TitleDescription>Соціальні мережі:</TitleDescription>
          <WrapSocialLink>
            {user.links.instagram && (
              <a href={user.links.instagram} target="_ablank">
                <IconInstagram />
              </a>
            )}
            {user.links.tiktok && (
              <a href={user.links.tiktok} target="_ablank">
                <IconTikTok />
              </a>
            )}
            {user.links.otherLink && (
              <a href={user.links.otherLink} target="_ablank">
                <IconSocialMedia />
              </a>
            )}
          </WrapSocialLink>
        </Item>
        <Item>
          <TitleDescription>Зв'язатись з лікарем:</TitleDescription>
          <WrapSocialLink>
            {user.phones && (
              <a href={`tel:${numberPhone}`}>
                <IconTelegram />
              </a>
            )}
            {user.phones && (
              <a href={`tel:${numberPhone}`}>
                <IconMessages />
              </a>
            )}
            {user.phones && (
              <a href={`tel:${numberPhone}`}>
                <IconPhone />
              </a>
            )}
          </WrapSocialLink>
        </Item>
        <Item>
          <TitleDescription>Оцінити лікаря:</TitleDescription>
          <Description>Оцінка</Description>
        </Item>
      </List>
    </>
  );
};
export default DoctorCard;
