import { SurvivorWrite } from "./survivor";

export interface AuthCredentials {
  username: string;
  password: string;
}

export interface AuthSignUp extends AuthCredentials {
  survivor: SurvivorWrite;
}