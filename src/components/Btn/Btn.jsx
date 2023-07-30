import { StyleBtn } from './Btn.style';
import { useAuth } from 'hooks';
import ListIcons from 'images/icons/ListIcons';
import { useState } from 'react';
import theme from 'theme';

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
  size = 'middle',
  transparent = false,
  icon,
  text,
  className,
  onClick,
  type = 'button',
}) => {
  const [isHover, setIsHover] = useState(false);
  const { currentTheme } = useAuth();

  let fill = 'null';

  if (isHover) {
    fill = theme[currentTheme].color.background;
  } else
    fill = !transparent
      ? theme[currentTheme].color.background
      : theme[currentTheme].color.btnDark;

  return (
    <StyleBtn
      onMouseEnter={e => setIsHover(true)}
      onMouseLeave={e => setIsHover(false)}
      size={size}
      transparent={transparent}
      className={className}
      onClick={() => onClick()}
      // type={type}
    >
      {text}
      {icon && ListIcons(fill, icon)}
    </StyleBtn>
  );
};

export default Btn;
