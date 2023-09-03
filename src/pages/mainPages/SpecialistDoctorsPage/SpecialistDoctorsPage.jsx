import DirectionSpecialistList from 'components/DirectionSpecialistList/DirectionSpecialistList';
import { Helmet } from 'react-helmet';
import { StyledContainer, StyledTitle } from './SpecialistDoctorsPage.styled';

const SpecialistDoctorsPage = () => {
  return (
    <>
      <Helmet>
        <title>Спеціалісти</title>
      </Helmet>

      <StyledContainer>
        <StyledTitle>Оберіть напрямок спеціаліста</StyledTitle>

        <DirectionSpecialistList />
      </StyledContainer>
    </>
  );
};

export default SpecialistDoctorsPage;
