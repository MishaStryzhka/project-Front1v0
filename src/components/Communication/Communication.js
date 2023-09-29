import Form from 'components/Forms/Form/Form';
import { Formik } from 'formik';
import {
  CheckboxField,
  CheckboxInputItem,
  CheckboxLabel,
  CommunicationWithDoctorLabel,
  CommunicationWrap,
  HowApplicationsAreReceivedLabel,
  ListCommunication,
  StyledLegend,
} from './Communication.styled';
import Checkbox from 'components/Checkbox/Checkbox';

const Communication = () => {
  const onSubmit = value => {
    console.log('value', value);
  };

  return (
    <Formik
      initialValues={{
        communicationWithDoctor: [],
        howApplicationsAreReceived: [],
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
            save={() => onSubmit(values)}
          >
            <CommunicationWrap>
              <CommunicationWithDoctorLabel>
                <StyledLegend>
                  Зв’язок пацієнта з лікарем <span>*</span>
                </StyledLegend>
                <ListCommunication>
                  <CheckboxInputItem>
                    <CheckboxField
                      type="checkbox"
                      id="telegramBot"
                      name="communicationWithDoctor"
                      value="telegramBot"
                      component={Checkbox}
                      onChange={handleChange}
                      checked
                    />
                    <CheckboxLabel htmlFor="telegramBot">
                      Телеграм-бот
                    </CheckboxLabel>
                  </CheckboxInputItem>

                  <CheckboxInputItem>
                    <CheckboxField
                      type="checkbox"
                      id="chatBotOnTheSite"
                      name="communicationWithDoctor"
                      value="chatBotOnTheSite"
                      component={Checkbox}
                      onChange={handleChange}
                    />
                    <CheckboxLabel htmlFor="chatBotOnTheSite">
                      Чат-бот на сайті
                    </CheckboxLabel>
                  </CheckboxInputItem>
                </ListCommunication>
              </CommunicationWithDoctorLabel>
              <HowApplicationsAreReceivedLabel>
                <StyledLegend>
                  Як поступають заявки <span>*</span>
                </StyledLegend>
                <ListCommunication>
                  <CheckboxInputItem>
                    <CheckboxField
                      type="checkbox"
                      id="telegramBot"
                      name="howApplicationsAreReceived"
                      value="telegramBot"
                      component={Checkbox}
                      onChange={handleChange}
                      checked
                    />
                    <CheckboxLabel htmlFor="telegramBot">
                      Телеграм-бот
                    </CheckboxLabel>
                  </CheckboxInputItem>

                  <CheckboxInputItem>
                    <CheckboxField
                      type="checkbox"
                      id="chatBotOnTheSite"
                      name="howApplicationsAreReceived"
                      value="chatBotOnTheSite"
                      component={Checkbox}
                      onChange={handleChange}
                    />
                    <CheckboxLabel htmlFor="chatBotOnTheSite">
                      Чат-бот на сайті
                    </CheckboxLabel>
                  </CheckboxInputItem>

                  <CheckboxInputItem>
                    <CheckboxField
                      type="checkbox"
                      id="email"
                      name="howApplicationsAreReceived"
                      value="email"
                      component={Checkbox}
                      onChange={handleChange}
                    />
                    <CheckboxLabel htmlFor="email">
                      Електрона пошта
                    </CheckboxLabel>
                  </CheckboxInputItem>
                </ListCommunication>
              </HowApplicationsAreReceivedLabel>
            </CommunicationWrap>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Communication;
