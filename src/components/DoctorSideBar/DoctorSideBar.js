import {
  Box,
  Button,
  Section,
  Text,
  Wrap,
  WrapAvatar,
} from './DoctorSideBar.styled';

const DoctorSideBar = ({ user }) => {
  return (
    <>
      <Section>
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
      </Section>
      <Section>
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
      </Section>
      <Section>
        <Box>
          {user.workExamples.length > 0 ? (
            user.workExamples.map(({ path, id }) => {
              return (
                <Wrap task={user.workExamples}>
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
      </Section>
    </>
  );
};

export default DoctorSideBar;
