import FormPersonalDataPatient from 'components/Forms/FormPersonalDataPatient/FormPersonalDataPatient';
import FormPersonalDataDoctor from 'components/Forms/FormPersonalDataDoctor/FormPersonalDataDoctor';
import { useAuth } from 'hooks';
import MainContent from 'componentsReusable/MainContent/MainContent';
import Title from 'componentsReusable/Titles/Title/Title';
import SecondaryButton from 'componentsReusable/Buttons/SecondaryButton/SecondaryButton';
import { Notify } from './PersonalData.styled';
import IconDone from 'images/icons/IconDone';
import { useDispatch } from 'react-redux';
import { resetError, resetResponse } from 'redux/auth/slice';
import { useState } from 'react';
import {
  ButtonStep,
  Pagination,
  PaginationItem,
} from 'components/Forms/FormPersonalDataDoctor/FormPersonalDataDoctor.styled';
import { ButtonWrapper } from 'components/AccountData/AccountData.styled';

const PersonalData = () => {
  const [typeSubmit, setTypeSubmit] = useState('save'); // 'save', 'preview', 'publish'

  const { userType, response, error } = useAuth();
  const dispatch = useDispatch();
  const [step, setStep] = useState('one');
  const steps = ['one', 'two', 'three'];
  // console.log('changeInfoValue', changeInfoValue);

  setTimeout(() => {
    response && dispatch(resetResponse(null));
  }, 2000);

  setTimeout(() => {
    error && dispatch(resetError(null));
  }, 2000);

  // const viewAsUser = () => {
  //   console.log('Переглянути картку як користувач');
  // };

  return (
    <div>
      <MainContent width={'800px'}>
        <Title>
          Особистий кабінет {userType === 'doctor' ? 'лікаря' : 'пацієнта'}
        </Title>
        {userType === 'doctor' && (
          <FormPersonalDataDoctor
            step={step}
            setStep={setStep}
            typeSubmit={typeSubmit}
          />
        )}
        {userType === 'patient' && <FormPersonalDataPatient />}
      </MainContent>
      <Pagination>
        {steps.map(itemStep => {
          const index = steps.indexOf(itemStep);
          const isLast = index + 1 === steps.length;
          return (
            <PaginationItem key={index}>
              <ButtonStep
                $active={itemStep === step}
                type="button"
                onClick={() => setStep(`${itemStep}`)}
                alt={`step ${itemStep}`}
                $islast={isLast}
              />
            </PaginationItem>
          );
        })}
      </Pagination>
      <ButtonWrapper>
        <SecondaryButton
          $styledType="green"
          type="submit"
          onClick={() => {
            setTypeSubmit('preview');
          }}
          form="formPersonalData"
        >
          Переглянути картку як користувач
        </SecondaryButton>
        <SecondaryButton
          $styledType="green"
          type="submit"
          form="formPersonalData"
        >
          Зберегти
        </SecondaryButton>
        <SecondaryButton
          $styledType="rose"
          type="submit"
          onClick={() => {
            setTypeSubmit('publish');
          }}
          form="formPersonalData"
        >
          Опублікувати
        </SecondaryButton>
      </ButtonWrapper>
      {response && (
        <Notify $show={response.status === 200}>
          <IconDone width="22px" height="22px" /> Дані збережено
        </Notify>
      )}
      {error && <Notify $show>!!! Щось пішло не так !!!</Notify>}
    </div>
  );
};

export default PersonalData;
