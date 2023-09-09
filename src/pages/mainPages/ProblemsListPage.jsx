import { Helmet } from 'react-helmet';
import {
  StyledContainer,
  StyledTitle,
} from './DirectionsListPage/DirectionsListPage.styled';
import NavList from 'componentsReusable/NavLIst/NavList';
import { problemListValue } from 'helpers/problemsList';

const ProblemsListPage = () => {
  return (
    <>
      <Helmet>
        <title>Проблеми</title>
      </Helmet>

      <StyledContainer>
        <StyledTitle>Оберіть свою проблему</StyledTitle>

        <NavList name="problem" list={problemListValue} />
      </StyledContainer>
    </>
  );
};

export default ProblemsListPage;
