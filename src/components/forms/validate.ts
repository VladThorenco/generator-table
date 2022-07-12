import * as yup from 'yup';

export const validationsSchema = yup.object().shape({
  name: yup.string().required('Required'),
  surName: yup.string().required('Required'),
  age: yup.number().typeError('Please enter only numbers').required('Required'),
  city: yup.string().required('Required'),
});
