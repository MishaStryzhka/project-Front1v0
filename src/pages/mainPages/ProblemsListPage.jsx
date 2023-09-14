import { Helmet } from 'react-helmet';
import { StyledTitle } from './DirectionsListPage/DirectionsListPage.styled';
import NavList from 'componentsReusable/NavLIst/NavList';
import { problemListValue } from 'helpers/problemsList';
import Container from 'componentsReusable/Container/Container';

const ProblemsListPage = () => {
  return (
    <>
      <Helmet>
        <title>Проблеми</title>
      </Helmet>

      <Container>
        <StyledTitle>Скарги</StyledTitle>

        <NavList name="problem" list={problemListValue} />
      </Container>
    </>
  );
};

export default ProblemsListPage;
