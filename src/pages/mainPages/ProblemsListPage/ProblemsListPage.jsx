import { Helmet } from 'react-helmet';
import { StyledTitle } from '../DirectionsListPage/DirectionsListPage.styled';
import NavList from 'componentsReusable/NavLIst/NavList';
import { problemsListValue } from 'helpers/problemsList';
import Container from 'componentsReusable/Container/Container';

const ProblemsListPage = () => {
  return (
    <>
      <Helmet>
        <title>Скарги</title>
      </Helmet>

      <Container>
        <StyledTitle type="page">Скарги</StyledTitle>

        <NavList name="problem" list={problemsListValue} />
      </Container>
    </>
  );
};

export default ProblemsListPage;
