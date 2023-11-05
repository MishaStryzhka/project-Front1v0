import { useLocation, useNavigate } from 'react-router-dom';
import { BackButton, Header } from './HeaderPage.styled';
import Title from 'componentsReusable/Titles/Title/Title';

const HeaderPage = ({ title }) => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log('location', location);

  return (
    <Header>
      {location?.state?.back && (
        <BackButton
          type="button"
          title="Кнопка назад"
          onClick={() =>
            navigate(location.state.back, {
              // replace: true,
              state: {
                user: location?.state?.user,
              },
            })
          }
        >
          {'<'} <span>Назад</span>
        </BackButton>
      )}
      <Title>{title}</Title>
    </Header>
  );
};

export default HeaderPage;
