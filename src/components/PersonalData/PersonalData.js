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
  InputWrapStepOne,
  InputWrapStepTwo,
  Label,
  LabelJob,
  Pagination,
  PaginationItem,
  PayMethodLabel,
  PhotoDescription,
  ReceptionHoursWrap,
  StyledLegend,
  WrapEducation,
  WrapEducationInputs,
  WrapJobs,
  WrapJobsInputs,
  WrapPhone,
  WrapPhoneInput,
  WrapSertificate,
  WrapSertificateInputs,
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
import Checkbox from 'components/Checkbox/Checkbox';
import Form from 'components/Form/Form';

const PersonalData = () => {
  let { error } = useAuth();
  const [avatar, setAvatar] = useState(null);
  const [sertificatePreview, setSertificatePreview] = useState(null);
  const [isOpenModalAddAvatar, setIsOpenModalAddAvatar] = useState(false);
  const [isOpenModalAddSertificate, setIsOpenModalAddSertificate] =
    useState(false);
  const [step, setStep] = useState('one');
  const steps = ['one', 'two'];

  error && console.log('error', error);

  const isChangeAvatarUrl = e => {
    const { files } = e.currentTarget;
    setAvatar(files[0]);
    setIsOpenModalAddAvatar(true);
  };

  const isChangeSertificate = e => {
    const { files } = e.currentTarget;
    setSertificatePreview(files[0]);
    setIsOpenModalAddSertificate(true);
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

  const handlePublish = () => {
    console.log('handlePublish');
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
        educations: [{ id: nanoid(), name: '', years: ['', ''] }],
        paymentMethods: [],
        jobs: [
          {
            id: nanoid(),
            name: '',
            cityArea: '',
            address: '',
            workSchedule: '',
            receptionHours: ['', ''],
          },
        ],
        sertificates: [{ id: nanoid(), file: null }],
      }}
      // validationSchema={validationDoctorPageSchema}
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
          <Form
            onSubmit={handleSubmit}
            isRequiredFields
            handlePublish={step === 'two' ? handlePublish : null}
            next={step !== 'two' ? handleNextStep : null}
          >
            {step === 'one' && (
              <InputWrapStepOne>
                <AvatarLabel as={Label}>
                  <AvatarWrap avatar={values.avatarUrl} htmlFor="avatarUrl">
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
                  {isOpenModalAddAvatar && (
                    <Modal
                      onClick={() => {
                        setIsOpenModalAddAvatar(false);
                      }}
                    >
                      <TitleModal>Додати зображення профілю</TitleModal>
                      <CropperWrap
                        image={avatar}
                        name="avatar"
                        setImage={e => setFieldValue('avatarUrl', e)}
                        onClose={() => setIsOpenModalAddAvatar(false)}
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
                            // showPlaceholder={phone}
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
                    {values.educations.map(education => {
                      const index = values.educations.indexOf(education);
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
                              const newEducation = [...values.educations];
                              console.log('value', value);

                              if (
                                values.educations.length !== 1 &&
                                value === ''
                              ) {
                                newEducation.splice(index, 1);
                              } else {
                                newEducation.splice(index, 1, {
                                  ...education,
                                  name: value,
                                });
                              }

                              setFieldValue('educations', newEducation);
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
                                const newEducation = [...values.educations];

                                newEducation.splice(index, 1, {
                                  ...education,
                                  years: [value, education.years[1]],
                                });

                                setFieldValue('educations', newEducation);
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
                                const newEducation = [...values.educations];

                                newEducation.splice(index, 1, {
                                  ...education,
                                  years: [education.years[0], value],
                                });

                                setFieldValue('educations', newEducation);
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
                    disabled={values.educations.find(
                      education => education.name === ''
                    )}
                    type="button"
                    onClick={() => {
                      const newEducation = [...values.educations];
                      newEducation.push({
                        id: nanoid(),
                        name: '',
                        years: ['', ''],
                      });
                      setFieldValue('educations', newEducation);
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
                        name="paymentMethods"
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
                        name="paymentMethods"
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
                <WrapJobs>
                  <WrapJobsInputs>
                    {values.jobs.map(job => {
                      const index = values.jobs.findIndex(
                        option => option.id === job.id
                      );

                      return (
                        <LabelJob key={job.id}>
                          <Input
                            error={
                              (errors.jobs && touched.jobs && errors.jobs) ||
                              null
                            }
                            type={'text'}
                            value={job.name}
                            name="jobs"
                            onChange={e => {
                              const { value } = e.currentTarget;
                              error = null;
                              const newJobs = [...values.jobs];
                              if (values.jobs.length !== 1 && value === '') {
                                newJobs.splice(index, 1);
                              } else {
                                newJobs.splice(index, 1, {
                                  ...job,
                                  name: value,
                                });
                              }

                              setFieldValue('jobs', newJobs);
                            }}
                            onBlur={handleBlur}
                            required
                            placeholder="Місце роботи"
                          />

                          <Input
                            error={
                              (errors.cityArea &&
                                touched.cityArea &&
                                errors.cityArea) ||
                              null
                            }
                            type={'text'}
                            value={job.cityArea}
                            name="jobs"
                            onChange={e => {
                              const { value } = e.currentTarget;
                              error = null;
                              const newJobs = [...values.jobs];
                              if (values.jobs.length !== 1 && value === '') {
                                newJobs.splice(index, 1);
                              } else {
                                newJobs.splice(index, 1, {
                                  ...job,
                                  cityArea: value,
                                });
                              }

                              setFieldValue('jobs', newJobs);
                            }}
                            onBlur={handleBlur}
                            required
                            placeholder="Район міста"
                          />

                          <Input
                            error={
                              (errors?.jobs?.address &&
                                touched?.jobs?.address &&
                                errors?.jobs?.address) ||
                              null
                            }
                            type={'text'}
                            value={job.address}
                            name="jobs"
                            onChange={e => {
                              const { value } = e.currentTarget;
                              error = null;
                              const newJobs = [...values.jobs];
                              if (values.jobs.length !== 1 && value === '') {
                                newJobs.splice(index, 1);
                              } else {
                                newJobs.splice(index, 1, {
                                  ...job,
                                  address: value,
                                });
                              }

                              setFieldValue('jobs', newJobs);
                            }}
                            onBlur={handleBlur}
                            required
                            placeholder="Адреса"
                          />

                          <Input
                            error={
                              (errors?.jobs?.workSchedule &&
                                touched?.jobs?.workSchedule &&
                                errors?.jobs?.workSchedule) ||
                              null
                            }
                            type={'text'}
                            value={job.workSchedule}
                            name="jobs"
                            onChange={e => {
                              const { value } = e.currentTarget;
                              error = null;
                              const newJobs = [...values.jobs];
                              if (values.jobs.length !== 1 && value === '') {
                                newJobs.splice(index, 1);
                              } else {
                                newJobs.splice(index, 1, {
                                  ...job,
                                  workSchedule: value,
                                });
                              }

                              setFieldValue('jobs', newJobs);
                            }}
                            onBlur={handleBlur}
                            required
                            placeholder="Графік роботи"
                          />

                          <ReceptionHoursWrap>
                            <p>Години прийому</p>
                            <Input
                              error={errors.job && touched.job && errors.job}
                              type={'time'}
                              value={job.receptionHours[0]}
                              name="job"
                              onChange={e => {
                                const { value } = e.currentTarget;
                                error = null;
                                const newJobs = [...values.jobs];

                                newJobs.splice(index, 1, {
                                  ...job,
                                  receptionHours: [
                                    value,
                                    job.receptionHours[1],
                                  ],
                                });

                                setFieldValue('jobs', newJobs);
                              }}
                              onBlur={handleBlur}
                              showPlaceholder="true"
                              placeholder="Від"
                              width="145px"
                              $style={`padding-left: 45px;`}
                            />
                            <Input
                              error={errors.job && touched.job && errors.job}
                              type={'time'}
                              value={job.receptionHours[1]}
                              name="jobs"
                              onChange={e => {
                                const { value } = e.currentTarget;
                                error = null;
                                const newjob = [...values.jobs];

                                newjob.splice(index, 1, {
                                  ...job,
                                  receptionHours: [
                                    job.receptionHours[0],
                                    value,
                                  ],
                                });

                                setFieldValue('jobs', newjob);
                              }}
                              onBlur={handleBlur}
                              showPlaceholder="true"
                              placeholder="До"
                              width="145px"
                              $style={`padding-left: 45px;`}
                            />
                          </ReceptionHoursWrap>
                        </LabelJob>
                      );
                    })}
                  </WrapJobsInputs>
                  <ButtonRefresh
                    disabled={values.jobs.find(job => job.name === '')}
                    type="button"
                    onClick={() => {
                      const newJobs = [...values.jobs];
                      newJobs.push({
                        id: nanoid(),
                        name: '',
                        cityArea: '',
                        address: '',
                        workSchedule: '',
                        receptionHours: ['', ''],
                      });
                      setFieldValue('jobs', newJobs);
                    }}
                  >
                    + Додати місце роботи
                  </ButtonRefresh>
                </WrapJobs>
                <WrapSertificate>
                  <WrapSertificateInputs>
                    {values.sertificates.map(sertificate => {
                      const index = values.sertificates.findIndex(
                        option => option.id === sertificate.id
                      );

                      return (
                        <AvatarLabel key={sertificate.id} as={Label}>
                          <AvatarWrap>
                            {sertificate.file ? (
                              <Avatar
                                src={URL.createObjectURL(sertificate.file)}
                                alt="Sertificate"
                              />
                            ) : (
                              <PhotoDescription>Sertificate</PhotoDescription>
                            )}
                          </AvatarWrap>
                          <div>
                            <div>
                              <AvaterInputLabel htmlFor="sertificates">
                                {sertificate.file
                                  ? 'Оновити сертифікат'
                                  : 'Завантажити сертифікат'}
                              </AvaterInputLabel>
                              <Field
                                style={{ display: 'none' }}
                                type="file"
                                id="sertificates"
                                value=""
                                name={`sertificates-${sertificate.id}`}
                                onChange={e => {
                                  document.body.style.overflow = 'auto';
                                  isChangeSertificate(e);
                                }}
                              />
                            </div>
                            <AvatarDescription>
                              Файл повинен бути у форматі jpeg або png.
                              Максимальний розмір - 5 Мб
                            </AvatarDescription>
                          </div>
                          {isOpenModalAddSertificate && (
                            <Modal
                              onClick={() => {
                                setIsOpenModalAddSertificate(false);
                              }}
                            >
                              <TitleModal>Додати сертифікат</TitleModal>
                              <CropperWrap
                                image={sertificatePreview}
                                name={`sertificate - ${nanoid()}`}
                                setImage={value => {
                                  console.log('value', value);

                                  const newSertificates = [
                                    ...values.sertificates,
                                  ];

                                  newSertificates.splice(index, 1, {
                                    ...sertificate,
                                    file: value,
                                  });

                                  setFieldValue(
                                    'sertificates',
                                    newSertificates
                                  );
                                }}
                                onClose={() => {
                                  document.body.style.overflow = 'auto';
                                  setIsOpenModalAddSertificate(false);
                                }}
                              />
                            </Modal>
                          )}
                        </AvatarLabel>
                      );
                    })}
                  </WrapSertificateInputs>
                  <ButtonRefresh
                    disabled={values.sertificates.find(
                      sertificate => sertificate.file === null
                    )}
                    type="button"
                    onClick={() => {
                      const newSertificate = [...values.sertificates];

                      newSertificate.push({ id: nanoid(), file: null });

                      setFieldValue('sertificates', newSertificate);
                    }}
                  >
                    + Додати сертифікат
                  </ButtonRefresh>
                </WrapSertificate>
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
          </Form>
        );
      }}
    </Formik>
  );
};

export default PersonalData;
