import * as Yup from 'yup';

export const validationDoctorDirectionWork = Yup.object().shape({
  directionsOfWork: Yup.array()
    .of(Yup.string())
    .min(1, 'Додайте принаймні одну спеціалізацію')
    .required('Додайте принаймні одну спеціалізацію'),
  problemsItSolves: Yup.object()
    .test(
      'at-least-one-problem',
      'Виберіть хоча б одну проблему',
      function (problems) {
        if (problems) {
          return Object.keys(problems).length > 0;
        }
        return false;
      }
    )
    .test(
      'prices',
      'Введіть мінімальну ціну для проблеми',
      function (problems) {
        if (problems) {
          const selectedProblems = Object.keys(problems);
          return selectedProblems.every(problemId => problems[problemId] > 0);
        }
        return false;
      }
    ),
});
