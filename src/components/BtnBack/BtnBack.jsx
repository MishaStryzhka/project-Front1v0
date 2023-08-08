import IconBackButton from 'images/icons/IconBackButton';
import { StyledButton } from './BtnBack.styled';
import { useAuth } from 'hooks';
import theme from 'theme';

const BtnBack = ({ onClick }) => {
  const { currentTheme } = useAuth();
  return (
    <StyledButton to="/main">
      <IconBackButton fill={theme[currentTheme].color.primary} />
    </StyledButton>
  );
};

export default BtnBack;
