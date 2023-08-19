import PatientPage from './PatientPage';
import DoctorPage from './DoctorPage';
import { useAuth } from 'hooks';

const UserPage = () => {
  const { userType } = useAuth();
  console.log('userType', userType);

  return userType === 'patient' ? <PatientPage /> : <DoctorPage />;
};

export default UserPage;
