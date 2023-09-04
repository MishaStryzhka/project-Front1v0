import Container from 'components/Container/Container';
import InputRadio from 'componentsReusable/InputRadio/InputRadio';
import MainContent from 'componentsReusable/MainContent/MainContent';
import PageContainer from 'componentsReusable/PageContainer/PageContainer';
import SideBarPage from 'componentsReusable/SideBarPage/SideBarPage';
import { Formik } from 'formik';
import { useParams } from 'react-router-dom';

const DirectionPage = () => {
  const { direction } = useParams();
  console.log('direction', direction);

  const hendleSubmit = value => {
    console.log('value', value);
  };

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
              return <InputRadio width="200" value={values.direction} />;
            }}
          </Formik>
        </SideBarPage>
        <MainContent></MainContent>
      </PageContainer>
    </Container>
  );
};

export default DirectionPage;
