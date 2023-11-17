import { useAuth } from 'hooks';
import { Box, Button, Text, Wrap, WrapAvatar } from './DoctorSideBar.styled';

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
        {user.certificates.length > 0 ? (
          user.certificates.map(({ path, id }) => {
            return (
              <Wrap certificate={user.certificates}>
                <img
                  key={id}
                  src={path}
                  alt="Сертифікат"
                  width={140}
                  height={140}
                />
              </Wrap>
            );
          })
        ) : (
          <Wrap>
            <Text>Photo</Text>
          </Wrap>
        )}
      </Box>
      <Button type="button">Переглянути сертифікати</Button>
      <Box>
        {user.workExamples.length > 0 ? (
          user.workExamples.map(({ path, id }) => {
            return (
              <Wrap workTasks={user.workExamples}>
                <img
                  key={id}
                  src={path}
                  alt="Робота"
                  width={140}
                  height={140}
                />
              </Wrap>
            );
          })
        ) : (
          <Wrap>
            <Text>Photo</Text>
          </Wrap>
        )}
      </Box>
      <Button type="button">Переглянути роботи</Button>
    </>
  );
};

export default DoctorSideBar;
