import { atom, RecoilState } from "recoil";
import { AuthSignUp } from "../models/auth";

export const itemListState: RecoilState<AuthSignUp> = atom<AuthSignUp>({
  key: 'survivorRegistrationState',
  default: {
    username: '',
    password: '',
    survivor: {
      name: '',
      age: 0,
      gender: '',
      position: {
        latitude: 0,
        longitude: 0,
        timezone: '',
      },
      inventory: [],
    },
  }
});
