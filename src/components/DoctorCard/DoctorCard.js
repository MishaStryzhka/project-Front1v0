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
  console.log(user.experienceYears);
  const currentDirections = directionListValue.filter(
    direction =>
      user.directionsOfWork && user.directionsOfWork.includes(direction.id)
  );
  const workDays = hoursOfWorkListValue.find(
    day => user.jobs && day.id === user.jobs[0].workSchedule
  );
  const typesOfPayment = paymentListValue.filter(
    value => user.paymentMethods && user.paymentMethods.includes(value.id)
  );

  const allProblems = [];
  problemsListValue.forEach(category => {
    allProblems.push(...category.problems);
  });
  const allProblemsBack =
    user.problemsItSolves && Object.keys(user.problemsItSolves);
  const currentProblems = allProblems.filter(
    problem => allProblemsBack && allProblemsBack.includes(problem.id)
  );
  const numberPhone = user.phones && user.phones[0];
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
          <Description>{user.experienceYears} років</Description>
        </Item>
        <Item>
          <TitleDescription>Освіта:</TitleDescription>
          <Wrap>
            {user.educations &&
              user.educations.map(education => {
                return (
                  <div>
                    <Description>{education.name}</Description>
                    <Description>
                      <span>{education.years.begin}</span>-
                      <span>{education.years.end}</span>
                    </Description>
                  </div>
                );
              })}
          </Wrap>
        </Item>
        <Item>
          <TitleDescription>Місце роботи:</TitleDescription>
          <Wrap>
            {user.jobs &&
              user.jobs.map(({ name, address, receptionHours }) => {
                return (
                  <div>
                    <Description>{name}</Description>
                    <Description>{address}</Description>
                    <Description>{workDays?.name}</Description>
                    {receptionHours.map(({ begin, end }) => {
                      return (
                        <Description>
                          <span>{begin}</span>-<span>{end}</span>
                        </Description>
                      );
                    })}
                  </div>
                );
              })}
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
            {user.links && (
              <a href={user.links.instagram} target="_ablank">
                <IconInstagram />
              </a>
            )}
            {user.links && (
              <a href={user.links.tiktok} target="_ablank">
                <IconTikTok />
              </a>
            )}
            {user.links && (
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
