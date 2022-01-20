import * as Yup from 'yup';

export default Yup.object().shape({
  username: Yup.string().required().min(2),
  password: Yup.string().required().min(6),
});
