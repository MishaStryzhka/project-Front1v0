// import Loader from 'components/Loader/Loader';
// import Image from 'images/Loader.png';

import { Field, Formik } from 'formik';
import {
  Avatar,
  AvatarLabel,
  AvatarWrap,
  AvaterInputLabel,
  // ButtonRefresh,
  // CheckboxField,
  // CheckboxInputWrap,
  // CheckboxLabel,
  // CheckboxWrap,
  // FieldStyled,
  FormDescription,
  FormPersonalData,
  InputWrap,
  Label,
  // PayMethodLabel,
  // Placeholder,
  PreviewBox,
  PreviewButtonWraper,
  // StyledLegend,
  // TextError,
  // WrapPhone,
  // WrapPhoneInput,
} from './PersonalData.styled';
// import { useAuth } from 'hooks';
// import PhoneInputField from 'components/PhoneImput/PhoneInput';
// import Checkbox from 'components/Checkbox/Checkbox';
import { useEffect, useState } from 'react';
import Modal from 'components/Modal/Modal';
import { TitleModal } from 'components/ModalRefreshEmail/ModalRefreshEmail.styled';
import CropperWrap from 'components/CropperWrap/CropperWrap';
// import { getWidthImg } from 'helpers/getWidthImg';
import SecondaryButton from 'components/SecondaryButton/SecondaryButton';
import PrimaryButton from 'components/PrimaryButton/PrimaryButton';
import getCroppedImg from 'helpers/cropImage';

const PersonalData = () => {
  // let { user, error } = useAuth();
  const [avatar, setAvatar] = useState(null);
  const [avatarWidth, setAvatarWidth] = useState(300);
  const [avatarHeight, setAvatarHeight] = useState(400);
  const [croppedArea, setCroppedArea] = useState({});

  useEffect(() => {
    if (avatar) {
      const img = document.createElement('img');

      img.src = URL.createObjectURL(avatar);

      img.onload = function () {
        setAvatarWidth(img.width);
        setAvatarHeight(img.height);
      };
    }
  }, [avatar]);

  const onSubmit = value => {
    const { lastName, firstName, patronymic, phones, contactMethod } = value;

    console.log(
      'value',
      lastName,
      firstName,
      patronymic,
      phones,
      contactMethod
    );
  };

  const isChangeAvatarUrl = e => {
    const { files } = e.currentTarget;
    setAvatar(files[0]);
  };

  const hendleSave = async () => {
    const canvas = await getCroppedImg(avatar, croppedArea);
    console.log('canvas', canvas);
  };

  return (
    <Formik
      initialValues={{
        avatarUrl: '',
        lastName: '',
        firstName: '',
        patronymic: '',
        phones: [],
        contactMethod: '',
      }}
      // validationSchema={validationPatientPageSchema}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        setFieldValue,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => {
        console.log('values', values);

        return (
          <FormPersonalData onSubmit={handleSubmit}>
            <FormDescription>
              <span>*</span> - обов’язкові поля
            </FormDescription>
            <InputWrap>
              <AvatarLabel as={Label}>
                <AvatarWrap>
                  {values.avatarUrl ? (
                    <Avatar src={values.avatarUrl} alt="avatar" />
                  ) : (
                    <p>Photo</p>
                  )}
                </AvatarWrap>
                <div>
                  <div>
                    <AvaterInputLabel htmlFor="avatarUrl">
                      Замінити фото
                    </AvaterInputLabel>
                    <Field
                      style={{ display: 'none' }}
                      value={values.avatarUrl}
                      type="file"
                      id="avatarUrl"
                      name="avatarUrl"
                      onChange={e => isChangeAvatarUrl(e)}
                    />
                  </div>
                  <p>
                    Файл повинен бути у форматі jpeg або png. Максимальний
                    розмір - 5 Мб
                  </p>
                </div>
                {avatar && (
                  <Modal
                    onClick={() => {
                      setAvatar(null);
                    }}
                  >
                    <TitleModal>Додати зображення профілю</TitleModal>
                    <PreviewBox width={avatarWidth} height={avatarHeight}>
                      <CropperWrap
                        yourImage={URL.createObjectURL(avatar)}
                        setCroppedArea={e => setCroppedArea(e)}
                      />
                    </PreviewBox>
                    <PreviewButtonWraper>
                      <SecondaryButton
                        onClick={() => {
                          setAvatar(null);
                        }}
                      >
                        Скасувати
                      </SecondaryButton>
                      <PrimaryButton onClick={hendleSave}>
                        Завантажити
                      </PrimaryButton>
                    </PreviewButtonWraper>
                  </Modal>
                )}
              </AvatarLabel>

              {/* <Label>
                <FieldStyled
                  disabled={true}
                  error={errors.email && touched.email && errors.email}
                  valid={values.email}
                  type="email"
                  name="email"
                  onChange={e => {
                    error = null;
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  required
                />
                 <ButtonRefresh type="button" onClick={handleRefreshEmail}>
                    Змінити e-mail
                  </ButtonRefresh>
                {!values.email && <Placeholder>email</Placeholder>}
                {errors.email && touched.email && (
                  <TextError>{errors.email}</TextError>
                )}
              </Label>

              <Label>
                <FieldStyled
                  disabled={true}
                  error={errors.password && touched.password && errors.password}
                  type={'password'}
                  name="password"
                  onChange={e => {
                    error = null;
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  required
                />
                 <ButtonRefresh type="button" onClick={handleRefreshPassword}>
                    Змінити пароль
                  </ButtonRefresh> 
                {!values.password && <Placeholder>Пароль</Placeholder>}
                {errors.password && touched.password && (
                  <TextError>{errors.password}</TextError>
                )}
                {error?.status === 401 && (
                  <TextError>Електронна пошта або пароль неправильні</TextError>
                )}
              </Label>

              <Label>
                <FieldStyled
                  error={errors.lastName && touched.lastName && errors.lastName}
                  type={'text'}
                  name="lastName"
                  onChange={e => {
                    error = null;
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  required
                />
                {!values.lastName && (
                  <Placeholder>
                    Прізвище <span>*</span>
                  </Placeholder>
                )}
                {errors.lastName && touched.lastName && (
                  <TextError>{errors.lastName}</TextError>
                )}
                {error?.status === 401 && (
                  <TextError>Електронна пошта або пароль неправильні</TextError>
                )}
              </Label>

              <Label>
                <FieldStyled
                  error={
                    errors.firstName && touched.firstName && errors.firstName
                  }
                  type={'text'}
                  name="firstName"
                  onChange={e => {
                    error = null;
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  required
                />
                {!values.firstName && (
                  <Placeholder>
                    Ім’я <span>*</span>
                  </Placeholder>
                )}
                {errors.firstName && touched.firstName && (
                  <TextError>{errors.firstName}</TextError>
                )}
                {error?.status === 401 && (
                  <TextError>Електронна пошта або пароль неправильні</TextError>
                )}
              </Label>

              <Label>
                <FieldStyled
                  error={
                    errors.patronymic && touched.patronymic && errors.patronymic
                  }
                  type={'text'}
                  name="patronymic"
                  onChange={e => {
                    error = null;
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  required
                />
                {!values.patronymic && <Placeholder>По-батькові</Placeholder>}
                {errors.patronymic && touched.patronymic && (
                  <TextError>{errors.patronymic}</TextError>
                )}
                {error?.status === 401 && (
                  <TextError>Електронна пошта або пароль неправильні</TextError>
                )}
              </Label>

              <WrapPhone>
                <WrapPhoneInput>
                  {(values.phones.length === 0
                    ? ['']
                    : [...(values.phones || '')]
                  ).map(phone => {
                    const index = values.phones.indexOf(phone);
                    return (
                      <Label key={values.phones.length === 0 ? 0 : index}>
                        <FieldStyled
                          as={PhoneInputField}
                          field={{ name: 'phones', value: phone }}
                          setFieldValue={value => {
                            const newPhones = [...values.phones];
                            if (
                              values.phones.indexOf('') &&
                              values.phones.indexOf('') !== index &&
                              value === ''
                            ) {
                              console.log('видаляти номер?');

                              newPhones.splice(index, 1);
                            } else {
                              if (
                                value !== '' &&
                                values.phones.indexOf(value) !== -1
                              ) {
                                console.log('Даний номер вже вказаний.');
                                return;
                              }
                              newPhones.splice(index, 1, value);
                            }

                            setFieldValue(
                              'phones',
                              index === -1 ? [value] : newPhones
                            );
                          }}
                        />

                        {phone === '' && (
                          <Placeholder type="tel">
                            +380 __ ___ ____ <span>*</span>
                          </Placeholder>
                        )}
                      </Label>
                    );
                  })}
                </WrapPhoneInput>
                <ButtonRefresh
                  disabled={
                    values.phones.indexOf('') !== -1 ||
                    values.phones.length === 0
                  }
                  type="button"
                  onClick={() => {
                    const newPhones = [...values.phones];
                    newPhones.push('');
                    setFieldValue('phones', newPhones);
                  }}
                >
                  + Додати номер телефону
                </ButtonRefresh>
              </WrapPhone>

              <PayMethodLabel>
                <StyledLegend>Спосіб зв’язку *</StyledLegend>
                <CheckboxWrap>
                  <CheckboxInputWrap>
                    <CheckboxField
                      type="radio"
                      id="chat"
                      name="contactMethod"
                      value="chat"
                      component={Checkbox}
                    />
                    <CheckboxLabel htmlFor="chat">чат</CheckboxLabel>
                  </CheckboxInputWrap>
                  <CheckboxInputWrap>
                    <CheckboxField
                      type="radio"
                      id="telegramBot"
                      name="contactMethod"
                      value="telegramBot"
                      component={Checkbox}
                    />
                    <CheckboxLabel htmlFor="telegramBot">
                      телеграм-бот
                    </CheckboxLabel>
                  </CheckboxInputWrap>
                </CheckboxWrap>
              </PayMethodLabel> */}
            </InputWrap>

            {/* <ButtonWrapper>
                <StyledButton
                  type="button"
                  onClick={() => handleRemoveAccount()}
                >
                  <IconRemove /> Видалити акаунт
                </StyledButton>
                <Button type="submit">Зберегти</Button>
              </ButtonWrapper> */}
          </FormPersonalData>
        );
      }}
    </Formik>
  );
};

export default PersonalData;
