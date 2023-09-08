import { StyledNavItem, StyledNavLink, StyledNavList } from './NavList.styled';

const NavList = ({ name, list = {} }) => {
  const entries = Object.entries(list);
  return (
    <StyledNavList>
      {entries.map(el => (
        <StyledNavItem key={el[0]}>
          <StyledNavLink to={`/${name}/?${name}=${el[0]}`}>
            {el[1]}
          </StyledNavLink>
        </StyledNavItem>
      ))}
    </StyledNavList>
  );
};

export default NavList;
