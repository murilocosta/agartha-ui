import * as Yup from 'yup';

export const positionSchema = Yup.object().shape({
  latitude: Yup.number().required(),
  longitude: Yup.number().required(),
  timezone: Yup.string(),
});

export const inventorySchema = Yup.object().shape({
  item_id: Yup.number().required().positive().integer(),
  quantity: Yup.number().required().positive().integer()
});

export const survivorSchema = Yup.object().shape({
  name: Yup.string().required().min(2),
  age: Yup.number().required().positive().integer(),
  gender: Yup.string().required(),
  position: positionSchema,
  inventory: Yup.array().of(inventorySchema).min(1),
});

export default Yup.object().shape({
  username: Yup.string().required().min(2),
  password: Yup.string().required().min(6),
  survivor: survivorSchema,
});
