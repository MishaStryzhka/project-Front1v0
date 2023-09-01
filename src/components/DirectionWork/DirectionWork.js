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
import Form from 'components/Form/Form';

const DirectionWork = () => {
  const onSubmit = value => {
    console.log('value', value);
  };

  const handlePublish = () => {
    console.log('handlePublish', handlePublish);
  };

  return (
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
        console.log('values.directionsOfWork', values.directionsOfWork);

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
                    checked
                  />
                  <CheckboxLabel htmlFor="therapeuticDentistry">
                    Терапевтична стоматологія
                  </CheckboxLabel>
                </CheckboxInputItem>

                <CheckboxInputItem>
                  <CheckboxField
                    type="checkbox"
                    id="Orthodontics"
                    name="directionsOfWork"
                    value="Orthodontics"
                    component={Checkbox}
                    onChange={handleChange}
                  />
                  <CheckboxLabel htmlFor="Orthodontics">
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
                    id="Prosthesis"
                    name="directionsOfWork"
                    value="Prosthesis"
                    component={Checkbox}
                    onChange={handleChange}
                  />
                  <CheckboxLabel htmlFor="Prosthesis">
                    Протезування
                  </CheckboxLabel>
                </CheckboxInputItem>

                <CheckboxInputItem>
                  <CheckboxField
                    type="checkbox"
                    id="Endodontics"
                    name="directionsOfWork"
                    value="Endodontics"
                    component={Checkbox}
                    onChange={handleChange}
                  />
                  <CheckboxLabel htmlFor="Endodontics">
                    Ендодонтія
                  </CheckboxLabel>
                </CheckboxInputItem>

                <CheckboxInputItem>
                  <CheckboxField
                    type="checkbox"
                    id="Parandotology"
                    name="directionsOfWork"
                    value="Parandotology"
                    component={Checkbox}
                    onChange={handleChange}
                  />
                  <CheckboxLabel htmlFor="Parandotology">
                    Парандотологія
                  </CheckboxLabel>
                </CheckboxInputItem>

                <CheckboxInputItem>
                  <CheckboxField
                    type="checkbox"
                    id="children'sDentistry"
                    name="directionsOfWork"
                    value="children'sDentistry"
                    component={Checkbox}
                    onChange={handleChange}
                  />
                  <CheckboxLabel htmlFor="children'sDentistry">
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
  );
};

export default DirectionWork;
