import {
  DirectionItem,
  DirectionList,
  StyledLink,
} from './DirectionSpecialistList.styled';

const DirectionSpecialistList = () => {
  return (
    <DirectionList>
      <DirectionItem>
        <StyledLink to="/direction/?direction=therapeuticDentistry">
          Терапевтична стоматологія
        </StyledLink>
      </DirectionItem>
      <DirectionItem>
        <StyledLink to="/direction/?direction=orthodontics">
          Ортодонтія
        </StyledLink>
      </DirectionItem>
      <DirectionItem>
        <StyledLink to="/direction/?direction=surgicalDentistry">
          Хірургічна стоматологія
        </StyledLink>
      </DirectionItem>
      <DirectionItem>
        <StyledLink to="/direction/?direction=prosthesis">
          Протезування
        </StyledLink>
      </DirectionItem>
      <DirectionItem>
        <StyledLink to="/direction/?direction=endodontics">
          Ендодонтія
        </StyledLink>
      </DirectionItem>
      <DirectionItem>
        <StyledLink to="/direction/?direction=parandotology">
          Парандотологія
        </StyledLink>
      </DirectionItem>
      <DirectionItem>
        <StyledLink to="/direction/?direction=children'sDentistry">
          Дитяча стоматологія
        </StyledLink>
      </DirectionItem>
      <DirectionItem>
        <StyledLink to="/direction/?direction=aestheticDentistry">
          Естетична стоматологія
        </StyledLink>
      </DirectionItem>
      <DirectionItem>
        <StyledLink to="/direction/?direction=radiology">
          Рентгенологія
        </StyledLink>
      </DirectionItem>
    </DirectionList>
  );
};

export default DirectionSpecialistList;
