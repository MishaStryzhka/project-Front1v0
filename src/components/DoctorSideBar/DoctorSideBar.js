import { useAuth } from 'hooks';
import {
  Box,
  Button,
  Text,
  WrapAvatar,
  WrapSertificate,
} from './DoctorSideBar.styled';

const DoctorSideBar = () => {
  const { user } = useAuth();
  return (
    <>
      <WrapAvatar avatar={user.avatar}>
        {user.avatar === '' ? (
          <Text>Photo</Text>
        ) : (
          <img
            src={user.avatar}
            alt="Фотографія лікаря"
            width={300}
            height={400}
          />
        )}
      </WrapAvatar>
      <Box>
        {user.certificates ? (
          user.certificates.map(({ path, id }) => {
            return (
              <WrapSertificate certificate={user.certificates}>
                <img
                  key={id}
                  src={path}
                  alt="Сертифікат"
                  width={140}
                  height={140}
                />
              </WrapSertificate>
            );
          })
        ) : (
          <WrapSertificate>
            <Text>Photo</Text>
          </WrapSertificate>
        )}
      </Box>
      <Button type="button">Переглянути сертифікати</Button>
      <Box>
        <WrapSertificate>
          {<Text>Photo</Text> || (
            <img src="" alt="Робота" width={140} height={140} />
          )}
        </WrapSertificate>
      </Box>
      <Button type="button">Переглянути роботи</Button>
    </>
  );
};

export default DoctorSideBar;
