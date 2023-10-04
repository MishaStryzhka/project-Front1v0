import { StyledTitle } from './Title.styled';

// type:
// ---default:
// font-size: 30px;
// font-weight: 600;

// ---page:
// font-size: 40px;
// font-weight: 600;
// text-align: center;

// ---modal:
// font-size: 30px;
// font-weight: 400;

const Title = ({ children, className, type }) => {
  return (
    <StyledTitle type={type} className={className}>
      {children}
    </StyledTitle>
  );
};

export default Title;
