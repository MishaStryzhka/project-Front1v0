import Title from 'componentsReusable/Titles/Title/Title';
import {
  ItemProblemCategories,
  ListProblemCategories,
  StyledNavItem,
  StyledNavLink,
  StyledNavList,
} from './NavList.styled';

const NavList = ({ name, list = {} }) => {
  console.log('list', list);

  return (
    <ListProblemCategories>
      {list.map(el => (
        <ItemProblemCategories>
          <Title>{el.category}</Title>
          <StyledNavList>
            {el.problems.map(problem => (
              <StyledNavItem key={problem.id}>
                <StyledNavLink to={`/${name}/?${name}=${problem.id}`}>
                  {problem.name_ua}
                </StyledNavLink>
              </StyledNavItem>
            ))}
          </StyledNavList>
        </ItemProblemCategories>
      ))}
    </ListProblemCategories>
  );
};

export default NavList;
