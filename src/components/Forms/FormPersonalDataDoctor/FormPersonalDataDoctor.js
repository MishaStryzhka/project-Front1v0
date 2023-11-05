import { nanoid } from '@reduxjs/toolkit';
import { Field, Formik } from 'formik';
import { useAuth } from 'hooks';
import { useState } from 'react';
import Form from '../Form/Form';
import {
  Avatar,
  AvatarDescription,
  AvatarLabel,
  AvatarWrap,
  AvaterInputLabel,
  ButtonRefresh,
  CheckboxField,
  CheckboxInputWrap,
  CheckboxLabel,
  CheckboxWrap,
  InputWrapStepOne,
  InputWrapStepTwo,
  Label,
  LabelJob,
  LabelLink,
  LabelYears,
  PayMethodLabel,
  PhotoDescription,
  StyledLegend,
  WrapEducation,
  WrapEducationInputs,
  WrapJobs,
  WrapJobsInputs,
  WrapPhone,
  WrapPhoneInput,
  WrapSertificate,
  WrapSertificateInputs,
} from './FormPersonalDataDoctor.styled';
import Modal from 'componentsReusable/Modal/Modal';
import { TitleModal } from 'components/Modals/ModalRefreshEmail/ModalRefreshEmail.styled';
import CropperWrap from 'components/CropperWrap/CropperWrap';
import Input from 'componentsReusable/Inputs/Input/Input';
import PhoneInputField from 'components/PhoneImput/PhoneInput';
import Checkbox from 'components/Checkbox/Checkbox';
import {
  ButtonAdd,
  Placeholder,
} from '../FormPersonalDataPatient/FormPersonalDataPatient.styled';
import ModalAddAvatar from 'components/Modals/ModalAddAvatar/ModalAddAvatar';
import { validationDoctorPageSchema } from 'schemas';
import IconAdd from 'images/icons/IconAdd';
import theme from 'theme';
import InputDate from 'componentsReusable/Inputs/InputDate/InputDate';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from 'redux/auth/operations';
import InputFromTo from 'componentsReusable/Inputs/InputFromTo/InputFromTo';
import IconInstagram from 'images/icons/IconInstagram';
import IconTikTok from 'images/icons/IconTikTok';
import InputAddress from 'componentsReusable/Inputs/InputAddress/InputAddress';
import InputRadio from 'componentsReusable/Inputs/InputRadio/InputRadio';
import { hoursOfWorkListValue } from 'helpers/hoursOfWorkList';
import { useLocation, useNavigate } from 'react-router-dom';
import IconSocialMedia from 'images/icons/IconSocialMedia';

const FormPersonalDataDoctor = ({ step, setStep, typeSubmit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); 
  console.log('location', location)
  const { user, currentTheme } = useAuth();
  console.log('user', user)
  const [avatar, setAvatar] = useState(null);
  const [sertificatePreview, setSertificatePreview] = useState(null);
  const [errorPhones, setErrorPhones] = useState([]);

  const [isOpenModalAddAvatar, setIsOpenModalAddAvatar] = useState(false);
  const [isOpenModalAddSertificate, setIsOpenModalAddSertificate] =
    useState(false);

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
    console.log('typeSubmit', typeSubmit);

    const {
      lastName,
      firstName,
      patronymic,
      phones,
      contactMethods,
      dateOfBirthday,
      experienceYears,
      avatarUrl,
      educations,
      certificates,
      instagram,
      tiktok,
      otherLink,
      jobs,
      paymentMethods,
    } = value;

    let links = {};

    if (instagram) links.instagram = instagram;
    if (tiktok) links.tiktok = tiktok;
    if (otherLink) links.otherLink = otherLink;

    if (typeSubmit === 'preview') {
      navigate(`/in/${user?.userID}`, {
        // replace: true,
        state: {
          user: {
            lastName,
            firstName,
            patronymic,
            phones,
            contactMethods,
            dateOfBirthday,
            experienceYears,
            avatarUrl,
            educations,
            certificates,
            instagram,
            tiktok,
            otherLink,
            jobs,
            paymentMethods,
          },
          back: location.pathname,
        },
      });
    } else if (typeSubmit === 'publish') {
      dispatch(
        updateUserInfo({
          avatar: avatarUrl,
          lastName,
          firstName,
          patronymic,
          phones,
          contactMethods,
          dateOfBirthday,
          experienceYears,
          educations,
          certificates,
          links,
          jobs,
          paymentMethods,
          isPublish: user.isPublish ? !user.isPublish : true,
        })
      );
    } else {
      dispatch(
        updateUserInfo({
          avatar: avatarUrl,
          lastName,
          firstName,
          patronymic,
          phones,
          contactMethods,
          dateOfBirthday,
          experienceYears,
          educations,
          certificates,
          links,
          jobs,
          paymentMethods,
        })
      );
    }
  };

  // const handleNextStep = () => {
  //   if (steps.indexOf(step) + 1 === steps.length) {
  //     setStep(steps[0]);
  //   } else {
  //     setStep(steps[steps.indexOf(step) + 1]);
  //   }
  // };

  // const handlePublish = () => {
  //   console.log('handlePublish');
  // };

  const getRegion = e => {
    const { address, setFieldValue } = e;

    return fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&language=uk`
    )
      .then(response => response.json())
      .then(data => {
        const results = data.results;
        if (results.length > 0) {
          const addressComponents = results[0].address_components;

          // Знайдіть компонент, який відповідає за район
          const regionComponent = addressComponents.find(component => {
            return component.types.includes('sublocality_level_1');
          });

          if (regionComponent) {
            const regionName = regionComponent.long_name;
            setFieldValue(regionName);
          }
        } else {
          setFieldValue('');
        }
      })
      .catch(error => {
        console.error('Помилка запиту до Google Geocoding API', error);
      });
  };

  return (
    <Formik
      initialValues={{
        avatarUrl: location?.state?.user?.avatar || user.avatar || '',
        lastName: location?.state?.user?.lastName || user.lastName || '',
        firstName: location?.state?.user?.firstName || user.firstName || '',
        patronymic: location?.state?.user?.patronymic || user.patronymic || '',
        dateOfBirthday:
          location?.state?.user?.dateOfBirthday || user.dateOfBirthday || '',
        phones: location?.state?.user?.phones || user.phones || [],
        experienceYears:
          location?.state?.user?.experienceYears || user.experienceYears || '0',
        educations:
          location?.state?.user?.educations || user?.educations?.length === 0
            ? [{ _id: nanoid(), name: '', years: { begin: "", end: "" } }]
            : user.educations,
        paymentMethods:
          location?.state?.user?.paymentMethods || user.paymentMethods || [],
        jobs: location?.state?.user?.jobs ||
          user.jobs || [
            {
              _id: nanoid(),
              name: '',
              cityArea: '',
              address: '',
              workSchedule: '',
              receptionHours: [{ begin: '', end: '' }],
            },
          ],
        certificates:
          location?.state?.user?.certificates || user.certificates || [],
        instagram:
          location?.state?.user?.links?.instagram ||
          user?.links?.instagram ||
          '',
        tiktok:
          location?.state?.user?.links?.tiktok || user?.links?.tiktok || '',
        otherLink:
          location?.state?.user?.links?.otherLink ||
          user?.links?.otherLink ||
          '',
      }}
      validationSchema={validationDoctorPageSchema}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      {e => {
        const {
          // initialValues,
          values,
          errors,
          touched,
          setFieldTouched,
          setFieldValue,
          handleChange,
          handleBlur,
          // handleSubmit,
          isSubmitting,
          setSubmitting,
        } = e;

        const handleYearsChange = (index, newYears) => {
          let newEducations = [...values.educations];
          newEducations[index] = {
            ...newEducations[index],
            years: newYears,
          };
          setFieldValue('educations', newEducations);
        };

        return (
          <>
            <Form
              id="formPersonalData"
              isRequiredFields
              // onChange={console.log('first')}
            >
              {step === 'one' && (
                <InputWrapStepOne>
                  <AvatarLabel as={Label}>
                    <AvatarWrap $avatar={values.avatarUrl} htmlFor="avatarUrl">
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
                          onChange={e => {
                            setSubmitting(false);
                            isChangeAvatarUrl(e);
                          }}
                        />
                      </div>
                      <AvatarDescription>
                        Файл повинен бути у форматі jpeg або png. Максимальний
                        розмір - 5 Мб
                      </AvatarDescription>
                    </div>
                    {isOpenModalAddAvatar && (
                      <ModalAddAvatar
                        avatar={avatar}
                        setFieldValue={setFieldValue}
                        setIsOpenModalAddAvatar={setIsOpenModalAddAvatar}
                      />
                    )}
                  </AvatarLabel>

                  <Label>
                    <Input
                      error={
                        errors.lastName && touched.lastName && errors.lastName
                      }
                      type={'text'}
                      name="lastName"
                      onChange={e => {
                        setSubmitting(false);
                        handleChange(e);
                      }}
                      value={values.lastName}
                      onBlur={handleBlur}
                      required
                      placeholder="Прізвище"
                      isSubmitting={isSubmitting}
                    />
                  </Label>

                  <Label>
                    <Input
                      error={
                        errors.firstName &&
                        touched.firstName &&
                        errors.firstName
                      }
                      type={'text'}
                      name="firstName"
                      onChange={e => {
                        setSubmitting(false);
                        handleChange(e);
                      }}
                      value={values.firstName}
                      onBlur={handleBlur}
                      required
                      placeholder="Ім’я"
                      isSubmitting={isSubmitting}
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
                      name="patronymic"
                      onChange={e => {
                        setSubmitting(false);
                        handleChange(e);
                      }}
                      value={values.patronymic}
                      onBlur={handleBlur}
                      placeholder="По-батькові"
                      isSubmitting={isSubmitting}
                    />
                  </Label>

                  <Label>
                    <InputDate
                      width="800px"
                      error={
                        errors.dateOfBirthday &&
                        touched.dateOfBirthday &&
                        errors.dateOfBirthday
                      }
                      type="date"
                      name="dateOfBirthday"
                      selectedValue={values.dateOfBirthday}
                      onChange={e => {
                        setSubmitting(false);
                        setFieldValue('dateOfBirthday', new Date(e));
                      }}
                      onBlur={handleBlur}
                      placeholder="Дата народження"
                      required
                      isSubmitting={isSubmitting}
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
                              error={
                                errorPhones[index] ||
                                (errors.phones &&
                                  errors.phones[index] &&
                                  touched.phones &&
                                  touched.phones[index] &&
                                  errors.phones[index])
                              }
                              as={PhoneInputField}
                              name="phones"
                              value={phone}
                              setFieldValue={value => {
                                setSubmitting(false);
                                const newPhones = [...values.phones];
                                errorPhones[index] = '';
                                if (
                                  values.phones.indexOf('') &&
                                  values.phones.indexOf('') !== index &&
                                  value === ''
                                ) {
                                  // видаляти номер?

                                  newPhones.splice(index, 1);
                                } else {
                                  if (
                                    value !== '' &&
                                    values.phones.indexOf(value) !== -1
                                  ) {
                                    // console.log('error?.phones', error?.phones);

                                    const newErrorPhones = [...errorPhones];
                                    newErrorPhones[index] =
                                      'Даний номер вже вказаний';
                                    setErrorPhones(newErrorPhones);
                                    // error = 'Даний номер вже вказаний';
                                    return;
                                  }
                                  newPhones.splice(index, 1, value);
                                }

                                value.length <= 13 &&
                                  setFieldValue(
                                    'phones',
                                    index === -1 ? [value] : newPhones
                                  );

                                const regex = /^\+\d{12}$/;
                                touched.phones = [...(touched.phones || '')];
                                touched.phones[index] = regex.test(value)
                                  ? false
                                  : phone.length === 0
                                  ? false
                                  : value.length >= phone.length
                                  ? false
                                  : true;
                              }}
                              onRemove={
                                index !== -1
                                  ? () => {
                                      const newPhones = [...values.phones];
                                      newPhones.splice(index, 1);
                                      setFieldValue('phones', newPhones);
                                    }
                                  : null
                              }
                              required
                              placeholder="Номер телефону"
                              isSubmitting={isSubmitting}
                            />

                            {phone === '' && (
                              <Placeholder type="tel">
                                +380 __ ___ ____
                              </Placeholder>
                            )}
                          </Label>
                        );
                      })}
                    </WrapPhoneInput>
                    <ButtonAdd
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
                      <IconAdd
                        fill={
                          values.phones.indexOf('') !== -1 ||
                          values.phones.length === 0
                            ? theme[currentTheme].color.disable
                            : theme[currentTheme].color.text
                        }
                      />{' '}
                      Додати номер телефону
                    </ButtonAdd>
                  </WrapPhone>

                  <LabelLink>
                    <IconInstagram />
                    <Input
                      width="700px"
                      error={
                        errors.instagram &&
                        touched.instagram &&
                        errors.instagram
                      }
                      type="url"
                      name="instagram"
                      value={values.instagram}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="http://"
                      isSubmitting={isSubmitting}
                    />
                  </LabelLink>

                  <LabelLink>
                    <IconTikTok />
                    <Input
                      width="700px"
                      error={errors.tiktok && touched.tiktok && errors.tiktok}
                      type="url"
                      name="tiktok"
                      value={values.tiktok}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="http://"
                      isSubmitting={isSubmitting}
                    />
                  </LabelLink>

                  <LabelLink>
                    <IconSocialMedia />
                    <Input
                      width="700px"
                      error={
                        errors.otherLink &&
                        touched.otherLink &&
                        errors.otherLink
                      }
                      type="url"
                      name="otherLink"
                      value={values.otherLink}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="http://"
                      isSubmitting={isSubmitting}
                    />
                  </LabelLink>
                </InputWrapStepOne>
              )}

              {step === 'two' && (
                <InputWrapStepOne>
                  <WrapEducation>
                    <WrapEducationInputs>
                      {values.educations.map(education => {
                        const index = values.educations.findIndex(
                          option => option._id === education._id
                        );
                        return (
                          <LabelYears key={education._id}>
                            <Input
                              error={
                                errors.educations &&
                                touched?.educations &&
                                touched?.educations[index]?.value &&
                                errors?.educations[index]?.value
                              }
                              type={'text'}
                              value={education.name}
                              name="educations"
                              onChange={e => {
                                setSubmitting(false);
                                const { value } = e.currentTarget;
                                const newEducation = [...values.educations];

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
                              onBlur={() => {
                                const newTouched = touched.educations
                                  ? [...touched.educations]
                                  : [];
                                newTouched[index] = touched.educations
                                  ? {
                                      ...touched.educations[index],
                                      value: true,
                                    }
                                  : { value: true };
                                setFieldTouched('educations', newTouched);
                              }}
                              placeholder="Освіта"
                              isSubmitting={isSubmitting}
                            />
                            <InputFromTo
                              error={
                                errors.educations &&
                                touched?.educations &&
                                touched?.educations[index]?.years &&
                                errors?.educations[index]?.years
                              }
                              onChange={newYears => {
                                setSubmitting(false);
                                handleYearsChange(index, newYears);
                              }}
                              setFieldTouched={() => {
                                const newTouched = touched.educations
                                  ? [...touched.educations]
                                  : [];
                                newTouched[index] = touched.educations
                                  ? {
                                      ...touched.educations[index],
                                      years: true,
                                    }
                                  : { years: true };
                                setFieldTouched('educations', newTouched);
                              }}
                              value={education.years}
                              width="250px"
                              placeholder="Роки"
                              type="date"
                              disabled={education.name === ''}
                              isSubmitting={isSubmitting}
                            />
                          </LabelYears>
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
                          _id: nanoid(),
                          name: '',
                          years: { begin: '', end: '' },
                        });
                        setFieldValue('educations', newEducation);
                      }}
                    >
                      + Додати освіту
                    </ButtonRefresh>
                  </WrapEducation>

                  <WrapSertificate>
                    <WrapSertificateInputs>
                      {values.certificates.map(sertificate => {
                        const index = values.certificates.findIndex(
                          option => option._id === sertificate._id
                        );

                        return (
                          <AvatarLabel key={sertificate._id} as={Label}>
                            <AvatarWrap>
                              {sertificate.file ? (
                                <Avatar
                                  src={URL.createObjectURL(sertificate.file)}
                                  alt="Sertificate"
                                />
                              ) : sertificate.path ? (
                                <Avatar
                                  src={sertificate.path}
                                  alt="Sertificate"
                                />
                              ) : (
                                <PhotoDescription>Sertificate</PhotoDescription>
                              )}
                            </AvatarWrap>
                            <div>
                              <div>
                                <AvaterInputLabel htmlFor="certificates">
                                  {sertificate.file
                                    ? 'Оновити сертифікат'
                                    : 'Завантажити сертифікат'}
                                </AvaterInputLabel>
                                <Field
                                  style={{ display: 'none' }}
                                  type="file"
                                  id="certificates"
                                  value=""
                                  name={`certificates-${sertificate.id}`}
                                  onChange={e => {
                                    setSubmitting(false);
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
                                    setSubmitting(false);
                                    // console.log('value', value);

                                    const newCertificates = [
                                      ...values.certificates,
                                    ];

                                    newCertificates.splice(index, 1, {
                                      ...sertificate,
                                      file: value,
                                    });

                                    setFieldValue(
                                      'certificates',
                                      newCertificates
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
                      disabled={values.certificates.find(
                        sertificate => sertificate.file === null
                      )}
                      type="button"
                      onClick={() => {
                        const newSertificate = [...values.certificates];

                        newSertificate.push({ _id: nanoid(), file: null });

                        setFieldValue('certificates', newSertificate);
                      }}
                    >
                      + Додати сертифікат
                    </ButtonRefresh>
                  </WrapSertificate>
                </InputWrapStepOne>
              )}

              {step === 'three' && (
                <InputWrapStepTwo>
                  <WrapJobs>
                    <WrapJobsInputs>
                      {values.jobs.map(job => {
                        const index = values.jobs.findIndex(
                          option => option._id === job._id
                        );

                        // console.log('job', job);

                        return (
                          <LabelJob key={job._id}>
                            <Input
                              error={
                                (errors.jobs && touched.jobs && errors.jobs) ||
                                null
                              }
                              type={'text'}
                              value={job.name}
                              name="jobs"
                              onChange={e => {
                                setSubmitting(false);
                                const { value } = e.currentTarget;
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

                            <InputAddress
                              error={
                                (errors?.jobs?.address &&
                                  touched?.jobs?.address &&
                                  errors?.jobs?.address) ||
                                null
                              }
                              type={'text'}
                              value={job.address}
                              name="jobs"
                              onChange={value => {
                                setSubmitting(false);
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

                                getRegion({
                                  address: value,
                                  setFieldValue: region => {
                                    if (
                                      values.jobs.length !== 1 &&
                                      value === ''
                                    ) {
                                      newJobs.splice(index, 1);
                                    } else {
                                      newJobs.splice(index, 1, {
                                        ...job,
                                        cityArea: region,
                                      });
                                    }

                                    setFieldValue('jobs', newJobs);
                                  },
                                });
                              }}
                              onBlur={handleBlur}
                              required
                              placeholder="Адреса"
                              width="800px"
                            />

                            <InputRadio
                              error={
                                (errors?.jobs?.workSchedule &&
                                  touched?.jobs?.workSchedule &&
                                  errors?.jobs?.workSchedule) ||
                                null
                              }
                              type={'text'}
                              selectedValue={job.workSchedule}
                              values={hoursOfWorkListValue}
                              name="jobs"
                              onChange={value => {
                                setSubmitting(false);
                                // const { value } = e.currentTarget;
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

                            <InputFromTo
                              error={
                                errors.jobs &&
                                touched?.jobs &&
                                touched?.jobs[index]?.years &&
                                errors?.jobs[index]?.years
                              }
                              onChange={newValue => {
                                // console.log('newValue', newValue);

                                setSubmitting(false);
                                let newWorkHours = [...values.jobs];
                                newWorkHours[index] = {
                                  ...newWorkHours[index],
                                  receptionHours: [newValue],
                                };

                                // console.log('newWorkHours', newWorkHours);

                                setFieldValue('jobs', newWorkHours);
                              }}
                              setFieldTouched={() => {
                                const newTouched = touched.job
                                  ? [...touched.job]
                                  : [];
                                newTouched[index] = touched.job
                                  ? {
                                      ...touched.job[index],
                                      years: true,
                                    }
                                  : { years: true };
                                setFieldTouched('jobs', newTouched);
                              }}
                              type={'time'}
                              value={job.receptionHours[0]}
                              width="250px"
                              placeholder="Години прийому"
                              disabled={job.name === ''}
                              isSubmitting={isSubmitting}
                            />
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
                          _id: nanoid(),
                          name: '',
                          cityArea: '',
                          address: '',
                          workSchedule: '',
                          receptionHours: [{ begin: '', end: '' }],
                        });
                        setFieldValue('jobs', newJobs);
                      }}
                    >
                      + Додати місце роботи
                    </ButtonRefresh>
                  </WrapJobs>

                  <Label>
                    <Input
                      error={
                        errors.experienceYears &&
                        touched.experienceYears &&
                        errors.experienceYears
                      }
                      type={'number'}
                      value={values.experienceYears}
                      name="experienceYears"
                      onChange={e => {
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                      required
                      placeholder="Загальний стаж роботи, років"
                      min="0"
                      max="100"
                      isSubmitting={isSubmitting}
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
                          onChange={value => {
                            setSubmitting(false);
                            handleChange(value);
                          }}
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
                          onChange={value => {
                            setSubmitting(false);
                            handleChange(value);
                          }}
                        />
                        <CheckboxLabel htmlFor="card">
                          Оплата карткою
                        </CheckboxLabel>
                      </CheckboxInputWrap>
                    </CheckboxWrap>
                  </PayMethodLabel>
                </InputWrapStepTwo>
              )}
            </Form>
            {/* <Pagination>
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
            </Pagination> */}
          </>
        );
      }}
    </Formik>
  );
};

export default FormPersonalDataDoctor;
