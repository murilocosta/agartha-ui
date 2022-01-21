import * as Yup from 'yup';

export default Yup.object().shape({
  latitude: Yup.number().required(),
  longitude: Yup.number().required(),
  timezone: Yup.string(),
});
