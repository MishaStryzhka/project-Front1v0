import {
  DirectionItem,
  DirectionList,
  StyledLink,
} from './DirectionSpecialistList.styled';

const DirectionSpecialistList = () => {
  return (
    <DirectionList>
      <DirectionItem>
        <StyledLink to="/directions/therapeuticDentistry/">
          Терапевтична стоматологія
        </StyledLink>
      </DirectionItem>
      <DirectionItem>
        <StyledLink to="/directions/orthodontics/">Ортодонтія</StyledLink>
      </DirectionItem>
      <DirectionItem>
        <StyledLink to="/directions/surgicalDentistry/">
          Хірургічна стоматологія
        </StyledLink>
      </DirectionItem>
      <DirectionItem>
        <StyledLink to="/directions/prosthesis/">Протезування</StyledLink>
      </DirectionItem>
      <DirectionItem>
        <StyledLink to="/directions/endodontics/">Ендодонтія</StyledLink>
      </DirectionItem>
      <DirectionItem>
        <StyledLink to="/directions/parandotology/">Парандотологія</StyledLink>
      </DirectionItem>
      <DirectionItem>
        <StyledLink to="/directions/children'sDentistry/">
          Дитяча стоматологія
        </StyledLink>
      </DirectionItem>
      <DirectionItem>
        <StyledLink to="/directions/aestheticDentistry/">
          Естетична стоматологія
        </StyledLink>
      </DirectionItem>
      <DirectionItem>
        <StyledLink to="/directions/radiology/">Рентгенологія</StyledLink>
      </DirectionItem>
    </DirectionList>
  );
};

export default DirectionSpecialistList;
