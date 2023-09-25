import { nanoid } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';

const UserPage = () => {
  const { id } = useParams();
  console.log('id', id);

  const user = {
    avatarUrl: '',
    lastName: 'Старшинова',
    firstName: 'Лідія',
    patronymic: 'Олександрівна',
    phones: ['+380960000000'],
    experienceYears: '17 років',
    educations: [
      {
        id: nanoid(),
        name: 'Харківський національний медичний університет',
        years: ['2001', '2006'],
      },
    ],
    paymentMethods: [],
    jobs: [
      {
        id: nanoid(),
        name: 'Міська поліклініка №4',
        cityArea: 'Харків',
        address: 'пр. Науки, 4',
        workSchedule: 'кожного парного дня, пн-сб',
        receptionHours: ['09:00', '19:00'],
      },
      {
        id: nanoid(),
        name: 'Стоматологічний кабінет “Сузір’я”',
        cityArea: 'Харків',
        address: 'пр. Науки, 35',
        workSchedule: 'кожного непарного дня, пн-сб',
        receptionHours: ['09:00', '19:00'],
      },
    ],
    sertificates: [{ id: nanoid(), file: null }],
    directionOfWork: [],
    problemsItSolves: [],
    communicationWithDoctor: [],
    howApplicationsAreReceived: [],
  };

  return <p>UserPage</p>;
};

export default UserPage;
