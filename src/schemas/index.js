const {
  validationDoctorDirectionWork,
} = require('./DoctorDirectionWorkSchema');
const { validationDoctorPageSchema } = require('./DoctorPageSchema');
const { validationPatientPageScheme } = require('./PatientPageSchema');
const { validationRegisterSchema } = require('./RegisterSchema');
const { validationLoginSchema } = require('./loginSchema');

module.exports = {
  validationLoginSchema,
  validationRegisterSchema,
  validationPatientPageScheme,
  validationDoctorPageSchema,
  validationDoctorDirectionWork,
};
