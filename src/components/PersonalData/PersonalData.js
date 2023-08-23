import { Field, Formik } from 'formik';
import {
  Avatar,
  AvatarDescription,
  AvatarLabel,
  AvatarWrap,
  AvaterInputLabel,
  ButtonRefresh,
  FieldStyled,
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
  PhotoDescription,
  Placeholder,
  StyledBtnBox,
  TextError,
  WrapEducation,
  WrapEducationInputs,
  WrapPhone,
  WrapPhoneInput,
  YearsWrap,
  // PayMethodLabel,
  // Placeholder,
  // StyledLegend,
  // TextError,
  // WrapPhone,
  // WrapPhoneInput,
} from './PersonalData.styled';
import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import { TitleModal } from 'components/ModalRefreshEmail/ModalRefreshEmail.styled';
import CropperWrap from 'components/CropperWrap/CropperWrap';
import { useAuth } from 'hooks';
import PhoneInputField from 'components/PhoneImput/PhoneInput';
import Input from 'components/Input/Input';
import { nanoid } from '@reduxjs/toolkit';
import { BtnBox } from 'components/AccountData/AccountData.styled';
import SecondaryButton from 'components/SecondaryButton/SecondaryButton';
import PrimaryButton from 'components/PrimaryButton/PrimaryButton';

const PersonalData = () => {
  const [avatar, setAvatar] = useState(null);
  const [isOpenModalAddImage, setIsOpenModalAddImage] = useState(false);
  let { error } = useAuth();

  const isChangeAvatarUrl = e => {
    const { files } = e.currentTarget;
    setAvatar(files[0]);
    setIsOpenModalAddImage(true);
  };

  return (
    <Formik
      initialValues={{
        avatarUrl: '',
        lastName: '',
        firstName: '',
        patronymic: '',
        phones: [],
        experienceYears: '',
        education: [{ id: nanoid(), name: '', years: ['', ''] }],
        contactMethod: '',
      }}
      // validationSchema={validationPatientPageSchema}
      // onSubmit={onSubmit}
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
        console.log('values.education', values.education);

        return (
          <FormPersonalData onSubmit={handleSubmit}>
            <FormDescription>
              <span>*</span> - обов’язкові поля
            </FormDescription>
            <InputWrap>
              <AvatarLabel as={Label}>
                <AvatarWrap>
                  {values.avatarUrl ? (
                    <Avatar
                      src={
                        typeof values.avatarUrl === 'object'
                          ? URL.createObjectURL(values.avatarUrl)
                          : values.avatarUrl
                      }
                      alt="avatar"
                    />
                  ) : (
                    <PhotoDescription>Photo</PhotoDescription>
                  )}
                </AvatarWrap>
                <div>
                  <div>
                    <AvaterInputLabel htmlFor="avatarUrl">
                      Замінити фото
                    </AvaterInputLabel>
                    <Field
                      style={{ display: 'none' }}
                      type="file"
                      id="avatarUrl"
                      value=""
                      name="avatarUrl"
                      onChange={e => isChangeAvatarUrl(e)}
                    />
                  </div>
                  <AvatarDescription>
                    Файл повинен бути у форматі jpeg або png. Максимальний
                    розмір - 5 Мб
                  </AvatarDescription>
                </div>
                {isOpenModalAddImage && (
                  <Modal
                    onClick={() => {
                      setIsOpenModalAddImage(false);
                    }}
                  >
                    <TitleModal>Додати зображення профілю</TitleModal>
                    <CropperWrap
                      image={avatar}
                      name="avatar"
                      setImage={e => setFieldValue('avatarUrl', e)}
                      onClose={() => setIsOpenModalAddImage(false)}
                    />
                  </Modal>
                )}
              </AvatarLabel>

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

              <Label>
                <FieldStyled
                  error={
                    errors.experienceYears &&
                    touched.experienceYears &&
                    errors.experienceYears
                  }
                  type={'number'}
                  min="1"
                  max="100"
                  name="experienceYears"
                  onChange={e => {
                    error = null;
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  required
                />
                {!values.experienceYears && (
                  <Placeholder>
                    Стаж роботи, років <span>*</span>
                  </Placeholder>
                )}
                {errors.experienceYears && touched.experienceYears && (
                  <TextError>{errors.experienceYears}</TextError>
                )}
              </Label>

              {/* <Label>
                <Input
                  error={
                    (errors.education &&
                      touched.education &&
                      errors.education) ||
                    null
                  }
                  type={'text'}
                  value={values.education.name}
                  name="education"
                  onChange={e => {
                    error = null;
                    setFieldValue('education', {
                      name: e.currentTarget.value,
                      years: [
                        values.education.years[0],
                        values.education.years[1],
                      ],
                    });
                  }}
                  onBlur={handleBlur}
                  required
                  placeholder="Освіта"
                />
                <YearsWrap>
                  <p>Роки</p>
                  <Input
                    error={
                      errors.education && touched.education && errors.education
                    }
                    type={'text'}
                    value={values.education.years[0]}
                    name="education"
                    onChange={e => {
                      error = null;
                      setFieldValue('education', {
                        name: values.education.name,
                        years: [
                          e.currentTarget.value,
                          values.education.years[1],
                        ],
                      });
                    }}
                    onBlur={handleBlur}
                    placeholder="Від"
                    width="100px"
                  />
                  <Input
                    error={
                      errors.education && touched.education && errors.education
                    }
                    type={'text'}
                    value={values.education.years[1]}
                    name="education"
                    onChange={e => {
                      error = null;
                      console.log('e', e.currentTarget.value);

                      setFieldValue('education', {
                        name: values.education.name,
                        years: [
                          values.education.years[0],
                          e.currentTarget.value,
                        ],
                      });
                    }}
                    onBlur={handleBlur}
                    placeholder="До"
                    width="100px"
                  />
                </YearsWrap>
              </Label> */}

              <WrapEducation>
                <WrapEducationInputs>
                  {values.education.map(education => {
                    const index = values.education.indexOf(education);
                    return (
                      <Label key={education.id}>
                        <Input
                          error={
                            (errors.education &&
                              touched.education &&
                              errors.education) ||
                            null
                          }
                          type={'text'}
                          value={education.name}
                          name="education"
                          onChange={e => {
                            const { value } = e.currentTarget;
                            error = null;
                            const newEducation = [...values.education];

                            if (values.education.length !== 1 && value === '') {
                              newEducation.splice(index, 1);
                            } else {
                              newEducation.splice(index, 1, {
                                ...education,
                                name: value,
                              });
                            }

                            setFieldValue('education', newEducation);
                          }}
                          onBlur={handleBlur}
                          // required
                          placeholder="Освіта"
                        />
                        <YearsWrap>
                          <p>Роки</p>
                          <Input
                            error={
                              errors.education &&
                              touched.education &&
                              errors.education
                            }
                            type={'text'}
                            value={education.years[0]}
                            name="education"
                            onChange={e => {
                              const { value } = e.currentTarget;
                              error = null;
                              const newEducation = [...values.education];

                              newEducation.splice(index, 1, {
                                ...education,
                                years: [value, education.years[1]],
                              });

                              setFieldValue('education', newEducation);
                            }}
                            onBlur={handleBlur}
                            placeholder="Від"
                            width="100px"
                          />
                          <Input
                            error={
                              errors.education &&
                              touched.education &&
                              errors.education
                            }
                            type={'text'}
                            value={education.years[1]}
                            name="education"
                            onChange={e => {
                              const { value } = e.currentTarget;
                              error = null;
                              const newEducation = [...values.education];

                              newEducation.splice(index, 1, {
                                ...education,
                                years: [education.years[0], value],
                              });

                              setFieldValue('education', newEducation);
                            }}
                            onBlur={handleBlur}
                            placeholder="До"
                            width="100px"
                          />
                        </YearsWrap>
                      </Label>
                    );
                  })}
                </WrapEducationInputs>
                <ButtonRefresh
                  disabled={values.education.find(
                    education => education.name === ''
                  )}
                  type="button"
                  onClick={() => {
                    const newEducation = [...values.education];
                    newEducation.push({
                      id: nanoid(),
                      name: '',
                      years: ['', ''],
                    });
                    setFieldValue('education', newEducation);
                  }}
                >
                  + Додати освіту
                </ButtonRefresh>
              </WrapEducation>

              {/* <PayMethodLabel>
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

            <StyledBtnBox>
              <SecondaryButton disabled type="button">
                Переглянути картку як користувач
              </SecondaryButton>
              <SecondaryButton type="submit">Зберегти чернетку</SecondaryButton>
              <PrimaryButton disabled type="submit">
                Далі
              </PrimaryButton>
            </StyledBtnBox>
          </FormPersonalData>
        );
      }}
    </Formik>
  );
};

export default PersonalData;
