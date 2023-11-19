import axios from 'axios';

export const getDoctorsByProblem = async ({
  problem,
  cityArea,
  hoursOfWork,
  experienceYears,
  limit,
  sort,
  page,
}) => {
  const res = await axios.get(
    `/doctors/problem/${problem}?&page=${page}&limit=${limit}&cityArea=${cityArea}&hoursOfWork=${hoursOfWork}&experienceYears=${experienceYears}`
  );

  return res;
};
