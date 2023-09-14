import { Helmet } from 'react-helmet';
import NavList from 'componentsReusable/NavLIst/NavList';
import { directionListValue } from 'helpers/directionsList';
import Container from 'componentsReusable/Container/Container';
import { StyledTitle } from './DirectionsListPage.styled';

const DirectionsListPage = () => {
  return (
    <>
      <Helmet>
        <title>Спеціалісти</title>
      </Helmet>

      <Container>
        <StyledTitle>Оберіть напрямок спеціаліста</StyledTitle>

        <NavList name="direction" list={directionListValue} />
      </Container>
    </>
  );
};

export default DirectionsListPage;
