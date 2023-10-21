import { Formik } from 'formik';
import {
  CheckboxField,
  CheckboxInputItem,
  CheckboxLabel,
  DirectionOfWorkLabel,
  ListDirection,
  ListProblems,
  ProblemsItSolvesLabel,
  StyledLegend,
} from './DirectionWork.styled';
import Checkbox from 'components/Checkbox/Checkbox';
import Form from 'components/Forms/Form/Form';
import MainContent from 'componentsReusable/MainContent/MainContent';
import Title from 'componentsReusable/Titles/Title/Title';
import { useAuth } from 'hooks';
import {
  Notify,
  StyledButtonWrapper,
} from 'components/PersonalData/PersonalData.styled';
import SecondaryButton from 'componentsReusable/Buttons/SecondaryButton/SecondaryButton';
import IconDone from 'images/icons/IconDone';

const DirectionWork = () => {
  const { response, userType } = useAuth();
  const onSubmit = value => {
    console.log('value', value);
  };

  const handlePublish = () => {
    console.log('handlePublish', handlePublish);
  };

  return (
    <div>
      <MainContent width={'800px'}>
        <Title>
          Особистий кабінет {userType === 'doctor' ? 'лікаря' : 'пацієнта'}
        </Title>
        <Formik
          initialValues={{
            directionOfWork: [],
            problemsItSolves: [],
          }}
          // validationSchema={validationDoctorPageSchema}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            setFieldValue,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => {
            return (
              <Form
                onSubmit={handleSubmit}
                isRequiredFields
                handlePublish={handlePublish}
              >
                <DirectionOfWorkLabel>
                  <StyledLegend>
                    Напрямки роботи <span>*</span>
                  </StyledLegend>
                  <ListDirection>
                    <CheckboxInputItem>
                      <CheckboxField
                        type="checkbox"
                        id="therapeuticDentistry"
                        name="directionsOfWork"
                        value="therapeuticDentistry"
                        component={Checkbox}
                        onChange={handleChange}
                      />
                      <CheckboxLabel htmlFor="therapeuticDentistry">
                        Терапевтична стоматологія
                      </CheckboxLabel>
                    </CheckboxInputItem>

                    <CheckboxInputItem>
                      <CheckboxField
                        type="checkbox"
                        id="orthodontics"
                        name="directionsOfWork"
                        value="orthodontics"
                        component={Checkbox}
                        onChange={handleChange}
                      />
                      <CheckboxLabel htmlFor="orthodontics">
                        Ортодонтія
                      </CheckboxLabel>
                    </CheckboxInputItem>

                    <CheckboxInputItem>
                      <CheckboxField
                        type="checkbox"
                        id="surgicalDentistry"
                        name="directionsOfWork"
                        value="surgicalDentistry"
                        component={Checkbox}
                        onChange={handleChange}
                      />
                      <CheckboxLabel htmlFor="surgicalDentistry">
                        Хірургічна стоматологія
                      </CheckboxLabel>
                    </CheckboxInputItem>

                    <CheckboxInputItem>
                      <CheckboxField
                        type="checkbox"
                        id="prosthesis"
                        name="directionsOfWork"
                        value="prosthesis"
                        component={Checkbox}
                        onChange={handleChange}
                      />
                      <CheckboxLabel htmlFor="prosthesis">
                        Протезування
                      </CheckboxLabel>
                    </CheckboxInputItem>

                    <CheckboxInputItem>
                      <CheckboxField
                        type="checkbox"
                        id="endodontics"
                        name="directionsOfWork"
                        value="endodontics"
                        component={Checkbox}
                        onChange={handleChange}
                      />
                      <CheckboxLabel htmlFor="endodontics">
                        Ендодонтія
                      </CheckboxLabel>
                    </CheckboxInputItem>

                    <CheckboxInputItem>
                      <CheckboxField
                        type="checkbox"
                        id="parandotology"
                        name="directionsOfWork"
                        value="parandotology"
                        component={Checkbox}
                        onChange={handleChange}
                      />
                      <CheckboxLabel htmlFor="parandotology">
                        Парандотологія
                      </CheckboxLabel>
                    </CheckboxInputItem>

                    <CheckboxInputItem>
                      <CheckboxField
                        type="checkbox"
                        id="childrensDentistry"
                        name="directionsOfWork"
                        value="childrensDentistry"
                        component={Checkbox}
                        onChange={handleChange}
                      />
                      <CheckboxLabel htmlFor="childrensDentistry">
                        Дитяча стоматологія
                      </CheckboxLabel>
                    </CheckboxInputItem>

                    <CheckboxInputItem>
                      <CheckboxField
                        type="checkbox"
                        id="aestheticDentistry"
                        name="directionsOfWork"
                        value="aestheticDentistry"
                        component={Checkbox}
                        onChange={handleChange}
                      />
                      <CheckboxLabel htmlFor="aestheticDentistry">
                        Естетична стоматологія
                      </CheckboxLabel>
                    </CheckboxInputItem>

                    <CheckboxInputItem>
                      <CheckboxField
                        type="checkbox"
                        id="radiology"
                        name="directionsOfWork"
                        value="radiology"
                        component={Checkbox}
                        onChange={handleChange}
                      />
                      <CheckboxLabel htmlFor="radiology">
                        Рентгенологія
                      </CheckboxLabel>
                    </CheckboxInputItem>
                  </ListDirection>
                </DirectionOfWorkLabel>

                <ProblemsItSolvesLabel>
                  <StyledLegend>
                    Проблеми, які вирішує <span>*</span>
                  </StyledLegend>

                  <ListProblems>
                    <CheckboxInputItem>
                      <CheckboxField
                        type="checkbox"
                        id="acutePain"
                        name="problemsItSolves"
                        value="acutePain"
                        component={Checkbox}
                        onChange={handleChange}
                        checked
                      />
                      <CheckboxLabel htmlFor="acutePain">
                        Гострий біль
                      </CheckboxLabel>
                    </CheckboxInputItem>

                    <CheckboxInputItem>
                      <CheckboxField
                        type="checkbox"
                        id="cariesTreatment"
                        name="problemsItSolves"
                        value="cariesTreatment"
                        component={Checkbox}
                        onChange={handleChange}
                        checked
                      />
                      <CheckboxLabel htmlFor="cariesTreatment">
                        Лікування карієсу
                      </CheckboxLabel>
                    </CheckboxInputItem>

                    <CheckboxInputItem>
                      <CheckboxField
                        type="checkbox"
                        id="treatmentOfGumDisease"
                        name="problemsItSolves"
                        value="treatmentOfGumDisease"
                        component={Checkbox}
                        onChange={handleChange}
                        checked
                      />
                      <CheckboxLabel htmlFor="treatmentOfGumDisease">
                        Лікування захворювання ясен
                      </CheckboxLabel>
                    </CheckboxInputItem>

                    <CheckboxInputItem>
                      <CheckboxField
                        type="checkbox"
                        id="treatmentOfRootCanals"
                        name="problemsItSolves"
                        value="treatmentOfRootCanals"
                        component={Checkbox}
                        onChange={handleChange}
                        checked
                      />
                      <CheckboxLabel htmlFor="treatmentOfRootCanals">
                        Лікування кореневих каналів
                      </CheckboxLabel>
                    </CheckboxInputItem>

                    <CheckboxInputItem>
                      <CheckboxField
                        type="checkbox"
                        id="installationOfEntalImplants/Prostheses"
                        name="problemsItSolves"
                        value="installationOfEntalImplants/Prostheses"
                        component={Checkbox}
                        onChange={handleChange}
                        checked
                      />
                      <CheckboxLabel htmlFor="installationOfEntalImplants/Prostheses">
                        Встановлення зубних імплантів/протезів
                      </CheckboxLabel>
                    </CheckboxInputItem>

                    <CheckboxInputItem>
                      <CheckboxField
                        type="checkbox"
                        id="treatmentOfMalocclusion"
                        name="problemsItSolves"
                        value="treatmentOfMalocclusion"
                        component={Checkbox}
                        onChange={handleChange}
                        checked
                      />
                      <CheckboxLabel htmlFor="treatmentOfMalocclusion">
                        Лікування неправильного прикусу
                      </CheckboxLabel>
                    </CheckboxInputItem>

                    <CheckboxInputItem>
                      <CheckboxField
                        type="checkbox"
                        id="restorationOfDamagedTeeth"
                        name="problemsItSolves"
                        value="restorationOfDamagedTeeth"
                        component={Checkbox}
                        onChange={handleChange}
                        checked
                      />
                      <CheckboxLabel htmlFor="restorationOfDamagedTeeth">
                        Відновлення пошкоджених зубів
                      </CheckboxLabel>
                    </CheckboxInputItem>

                    <CheckboxInputItem>
                      <CheckboxField
                        type="checkbox"
                        id="teethWhitening"
                        name="problemsItSolves"
                        value="teethWhitening"
                        component={Checkbox}
                        onChange={handleChange}
                        checked
                      />
                      <CheckboxLabel htmlFor="teethWhitening">
                        Відбілювання зубів
                      </CheckboxLabel>
                    </CheckboxInputItem>

                    <CheckboxInputItem>
                      <CheckboxField
                        type="checkbox"
                        id="preventiveCleaning"
                        name="problemsItSolves"
                        value="preventiveCleaning"
                        component={Checkbox}
                        onChange={handleChange}
                        checked
                      />
                      <CheckboxLabel htmlFor="preventiveCleaning">
                        Профілактична чистка
                      </CheckboxLabel>
                    </CheckboxInputItem>

                    <CheckboxInputItem>
                      <CheckboxField
                        type="checkbox"
                        id="removalOfDentalDeposits"
                        name="problemsItSolves"
                        value="removalOfDentalDeposits"
                        component={Checkbox}
                        onChange={handleChange}
                        checked
                      />
                      <CheckboxLabel htmlFor="removalOfDentalDeposits">
                        Зняття зубних відкладень
                      </CheckboxLabel>
                    </CheckboxInputItem>

                    <CheckboxInputItem>
                      <CheckboxField
                        type="checkbox"
                        id="treatmentOfDiseasesOfTheMucousMembrane"
                        name="problemsItSolves"
                        value="treatmentOfDiseasesOfTheMucousMembrane"
                        component={Checkbox}
                        onChange={handleChange}
                        checked
                      />
                      <CheckboxLabel htmlFor="treatmentOfDiseasesOfTheMucousMembrane">
                        Лікування захворювань слизової оболонки
                      </CheckboxLabel>
                    </CheckboxInputItem>

                    <CheckboxInputItem>
                      <CheckboxField
                        type="checkbox"
                        id="treatmentOfChewingDisorders"
                        name="problemsItSolves"
                        value="treatmentOfChewingDisorders"
                        component={Checkbox}
                        onChange={handleChange}
                        checked
                      />
                      <CheckboxLabel htmlFor="treatmentOfChewingDisorders">
                        Лікування вади жування
                      </CheckboxLabel>
                    </CheckboxInputItem>

                    <CheckboxInputItem>
                      <CheckboxField
                        type="checkbox"
                        id="restorationProcedures"
                        name="problemsItSolves"
                        value="restorationProcedures"
                        component={Checkbox}
                        onChange={handleChange}
                        checked
                      />
                      <CheckboxLabel htmlFor="restorationProcedures">
                        Реставраційні процедури
                      </CheckboxLabel>
                    </CheckboxInputItem>

                    <CheckboxInputItem>
                      <CheckboxField
                        type="checkbox"
                        id="treatmentOfInjuriesOfTheOralCavity"
                        name="problemsItSolves"
                        value="treatmentOfInjuriesOfTheOralCavity"
                        component={Checkbox}
                        onChange={handleChange}
                        checked
                      />
                      <CheckboxLabel htmlFor="treatmentOfInjuriesOfTheOralCavity">
                        Лікування травм ротової порожнини
                      </CheckboxLabel>
                    </CheckboxInputItem>
                  </ListProblems>
                </ProblemsItSolvesLabel>
              </Form>
            );
          }}
        </Formik>
      </MainContent>
      <StyledButtonWrapper>
        <SecondaryButton
          $styledType="rose"
          type="submit"
          form="formPersonalData"
        >
          Зберегти
        </SecondaryButton>
      </StyledButtonWrapper>
      {response && (
        <Notify $show={response.status === 200}>
          <IconDone width="22px" height="22px" /> Дані збережено
        </Notify>
      )}
      {response && (
        <Notify $show={response.status !== 200}>
          <IconDone width="22px" height="22px" /> Дані збережено
        </Notify>
      )}
    </div>
  );
};

export default DirectionWork;
