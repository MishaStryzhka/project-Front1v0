import { Field, Formik } from 'formik';
import {
  Avatar,
  AvatarDescription,
  AvatarLabel,
  AvatarWrap,
  AvaterInputLabel,
  ButtonRefresh,
  ButtonStep,
  CheckboxField,
  CheckboxInputWrap,
  CheckboxLabel,
  CheckboxWrap,
  FormDescription,
  FormPersonalData,
  InputWrapStepOne,
  InputWrapStepTwo,
  Label,
  Pagination,
  PaginationItem,
  PayMethodLabel,
  PhotoDescription,
  StyledBtnBox,
  StyledLegend,
  WrapEducation,
  WrapEducationInputs,
  WrapPhone,
  WrapPhoneInput,
  YearsWrap,
} from './PersonalData.styled';
import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import { TitleModal } from 'components/ModalRefreshEmail/ModalRefreshEmail.styled';
import CropperWrap from 'components/CropperWrap/CropperWrap';
import { useAuth } from 'hooks';
import PhoneInputField from 'components/PhoneImput/PhoneInput';
import Input from 'components/Input/Input';
import { nanoid } from '@reduxjs/toolkit';
import SecondaryButton from 'components/SecondaryButton/SecondaryButton';
import PrimaryButton from 'components/PrimaryButton/PrimaryButton';
import Checkbox from 'components/Checkbox/Checkbox';

const PersonalData = () => {
  let { error } = useAuth();
  const [avatar, setAvatar] = useState(null);
  const [isOpenModalAddImage, setIsOpenModalAddImage] = useState(false);
  const [step, setStep] = useState('one');
  const steps = ['one', 'two'];

  error && console.log('error', error);

  const isChangeAvatarUrl = e => {
    const { files } = e.currentTarget;
    setAvatar(files[0]);
    setIsOpenModalAddImage(true);
  };

  const onSubmit = value => {
    console.log('value', value);
  };

  const handleNextStep = () => {
    if (steps.indexOf(step) + 1 === steps.length) {
      setStep(steps[0]);
    } else {
      setStep(steps[steps.indexOf(step) + 1]);
    }
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
        paymentMethod: [],
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
        return (
          <FormPersonalData onSubmit={handleSubmit}>
            <FormDescription>
              <span>*</span> - обов’язкові поля
            </FormDescription>

            {step === 'one' && (
              <InputWrapStepOne>
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
                  <Input
                    error={
                      errors.lastName && touched.lastName && errors.lastName
                    }
                    type={'text'}
                    value={values.lastName}
                    name="lastName"
                    onChange={e => {
                      error = null;
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    required
                    placeholder="Прізвище"
                  />
                </Label>

                <Label>
                  <Input
                    error={
                      errors.firstName && touched.firstName && errors.firstName
                    }
                    type={'text'}
                    value={values.firstName}
                    name="firstName"
                    onChange={e => {
                      error = null;
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    required
                    placeholder="Ім’я"
                  />
                </Label>

                <Label>
                  <Input
                    error={
                      errors.patronymic &&
                      touched.patronymic &&
                      errors.patronymic
                    }
                    type={'text'}
                    value={values.patronymic}
                    name="patronymic"
                    onChange={e => {
                      error = null;
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    required
                    placeholder="По-батькові"
                  />
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
                          <Input
                            as={PhoneInputField}
                            error={null}
                            // type={'text'}
                            value={phone}
                            // name="patronymic"
                            // onChange={e => {
                            //   error = null;
                            //   handleChange(e);
                            // }}
                            // onBlur={handleBlur}
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
                            required
                            showPlaceholder={phone}
                            placeholder="+380 __ ___ ____"
                          />
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
                  <Input
                    error={
                      errors.experienceYears &&
                      touched.experienceYears &&
                      errors.experienceYears
                    }
                    type={'text'}
                    value={values.experienceYears}
                    name="experienceYears"
                    onChange={e => {
                      error = null;
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    required
                    placeholder="Стаж роботи, років"
                  />
                  {/* <FieldStyled
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
                  )} */}
                </Label>

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

                              if (
                                values.education.length !== 1 &&
                                value === ''
                              ) {
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

                <PayMethodLabel>
                  <StyledLegend>Спосіб оплати</StyledLegend>
                  <CheckboxWrap>
                    <CheckboxInputWrap>
                      <CheckboxField
                        type="checkbox"
                        id="cash"
                        name="paymentMethod"
                        value="cash"
                        component={Checkbox}
                        onChange={handleChange}
                        checked
                      />
                      <CheckboxLabel htmlFor="cash">
                        Готівковий розрахунок
                      </CheckboxLabel>
                    </CheckboxInputWrap>
                    <CheckboxInputWrap>
                      <CheckboxField
                        type="checkbox"
                        id="card"
                        name="paymentMethod"
                        value="card"
                        component={Checkbox}
                        onChange={handleChange}
                      />
                      <CheckboxLabel htmlFor="card">
                        Оплата карткою
                      </CheckboxLabel>
                    </CheckboxInputWrap>
                  </CheckboxWrap>
                </PayMethodLabel>
              </InputWrapStepOne>
            )}

            {step === 'two' && (
              <InputWrapStepTwo>
                <Label>
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
                    onChange={e => {}}
                    onBlur={handleBlur}
                    // required
                    placeholder="Місце роботи"
                  />
                </Label>

                <Label>
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
                    onChange={e => {}}
                    onBlur={handleBlur}
                    // required
                    placeholder="Місце роботи"
                  />
                </Label>
              </InputWrapStepTwo>
            )}

            <Pagination>
              {steps.map(itemStep => {
                const index = steps.indexOf(itemStep);
                const isLast = index + 1 === steps.length;
                return (
                  <PaginationItem key={index}>
                    <ButtonStep
                      $active={itemStep === step}
                      type="button"
                      onClick={() => setStep(`${itemStep}`)}
                      alt={`step ${itemStep}`}
                      $islast={isLast}
                    />
                  </PaginationItem>
                );
              })}
            </Pagination>

            <StyledBtnBox>
              <SecondaryButton disabled type="button">
                Переглянути картку як користувач
              </SecondaryButton>
              <SecondaryButton type="submit">Зберегти чернетку</SecondaryButton>
              <PrimaryButton type="button" onClick={handleNextStep}>
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
