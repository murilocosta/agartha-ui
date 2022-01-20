import { SurvivorWrite } from "./survivor";

export interface AuthCredentials {
  username: string;
  password: string;
}

export interface AuthSignUp extends AuthCredentials {
  survivor: SurvivorWrite;
}

export interface AuthResponse {
  access_token: string;
  expires_in: Date;
  token_type: string;
}