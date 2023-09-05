import Container from 'components/Container/Container';
import InputRadio from 'componentsReusable/InputRadio/InputRadio';
import MainContent from 'componentsReusable/MainContent/MainContent';
import PageContainer from 'componentsReusable/PageContainer/PageContainer';
import SideBarPage from 'componentsReusable/SideBarPage/SideBarPage';
import { Formik } from 'formik';
import { directionListValue } from 'helpers/directionsList';
import { useParams } from 'react-router-dom';

const DirectionPage = () => {
  const { direction } = useParams();
  console.log('direction', direction);

  const hendleSubmit = value => {
    console.log('value', value);
  };

  console.log('directionListValue[direction]', directionListValue[direction]);

  return (
    <Container>
      <PageContainer>
        <SideBarPage>
          <Formik
            initialValues={{
              direction: direction,
            }}
            //   validationSchema={validationRegisterSchema}
            onSubmit={hendleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => {
              console.log('values.direction', values.direction);

              return (
                <InputRadio
                  width="200"
                  selectedValue={values.direction}
                  values={directionListValue}
                  handleChange={handleChange}
                  name="direction"
                />
              );
            }}
          </Formik>
        </SideBarPage>
        <MainContent></MainContent>
      </PageContainer>
    </Container>
  );
};

export default DirectionPage;
