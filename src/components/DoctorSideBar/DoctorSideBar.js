import { useAuth } from 'hooks';
import {
  BoxSertificate,
  Button,
  WrapAvatar,
  WrapSertificate,
} from './DoctorSideBar.styled';

const DoctorSideBar = () => {
  const { user } = useAuth();
  return (
    <>
      <WrapAvatar>
        <img
          src={user.avatar}
          alt="Фотографія лікаря"
          width={300}
          height={400}
        />
      </WrapAvatar>

      <BoxSertificate>
        {user.certificates.map(({ path, id }) => {
          return (
            <WrapSertificate key={id}>
              <img src={path} alt="Сертифікат" width={140} height={140} />
            </WrapSertificate>
          );
        })}
        <Button type="button">Переглянути сертифікати</Button>
      </BoxSertificate>
    </>
  );
};

export default DoctorSideBar;
