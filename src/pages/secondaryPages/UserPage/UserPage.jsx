import { useParams } from 'react-router-dom';
import PatientPage from './PatientPage';
import DoctorPage from './DoctorPage';

const UserPage = () => {
  const { userType } = useParams();
  return userType === 'patient' ? <PatientPage /> : <DoctorPage />;
};

export default UserPage;
