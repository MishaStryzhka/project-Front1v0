import { StyledBtn, StyledNavLink } from './Btn.style';
// import { useAuth } from 'hooks';
// import ListIcons from 'images/icons/ListIcons';
// import { useState } from 'react';
// import theme from 'theme';

// ================INFO=======================
//                 size
// 'max''normal''round''small''min'
//
//   transparent = [boolean]
//   icon={"nameIcon"}
//   text=[string],
//   className,
//   onClick={[function]},
//   type = {type},
// =============================================

const Btn = ({
  transparent = 'false',
  text,
  className,
  onClick,
  type = 'button',
  to,
  children,
}) => {
  // const [isHover, setIsHover] = useState(false);
  // const { currentTheme } = useAuth();

  // let fill = 'null';

  // if (isHover) {
  //   fill = theme[currentTheme].color.background;
  // } else
  //   fill = !transparent
  //     ? theme[currentTheme].color.background
  //     : theme[currentTheme].color.btnDark;

  return type === 'link' ? (
    <StyledNavLink
      // onMouseEnter={e => setIsHover(true)}
      // onMouseLeave={e => setIsHover(false)}
      transparent={transparent}
      className={className}
      type={type}
      to={to}
      children={children}
    >
      {text}
      {children}
    </StyledNavLink>
  ) : (
    <StyledBtn
      // onMouseEnter={e => setIsHover(true)}
      // onMouseLeave={e => setIsHover(false)}
      transparent={transparent}
      className={className}
      onClick={() => onClick()}
      type={type}
      children={children}
    >
      {text}
      {children}
    </StyledBtn>
  );
};

export default Btn;
