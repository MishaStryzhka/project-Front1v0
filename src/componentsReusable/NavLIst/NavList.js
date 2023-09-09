import { StyledNavItem, StyledNavLink, StyledNavList } from './NavList.styled';

const NavList = ({ name, list = {} }) => {
  return (
    <StyledNavList>
      {list.map(el => (
        <StyledNavItem key={el.id}>
          <StyledNavLink to={`/${name}/?${name}=${el.id}`}>
            {el.name}
          </StyledNavLink>
        </StyledNavItem>
      ))}
    </StyledNavList>
  );
};

export default NavList;
