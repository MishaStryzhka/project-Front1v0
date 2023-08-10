import IconGoogle from 'images/icons/IconGoogle';
import { Line, LineText } from './OrBoxAotorization.styled';
import IconFacebook from 'images/icons/IconFacebook';

const OrBoxAotorization = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: 800,
          paddingTop: 52,
          alignItems: 'center',
        }}
      >
        <Line />
        <LineText>або</LineText>
        <Line />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          columnGap: 100,
          width: 800,
          paddingTop: 27,
          alignItems: 'center',
        }}
      >
        <a href="https://project-back1v0.onrender.com/api/users/google/">
          <IconGoogle />
        </a>
        <a href="https://project-back1v0.onrender.com/api/users/facebook/">
          <IconFacebook />
        </a>
      </div>
    </div>
  );
};

export default OrBoxAotorization;
