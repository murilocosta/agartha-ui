import * as Yup from 'yup';

export default Yup.object().shape({
  reportee_id: Yup.number().required(),
  reported_id: Yup.number().required(),
  annotation: Yup.string(),
});
