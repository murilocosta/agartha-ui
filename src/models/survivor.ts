import { Location } from "./location";

export enum SurvivorGender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}

interface SurvivorPayload {
  name: string;
  age: number;
  gender: string | SurvivorGender;
  position: Location;
}

export interface SurvivorRead extends SurvivorPayload {
  id: number;
}

export interface SurvivorResource {
  item_id: number;
  quantity: number;
}

export interface SurvivorWrite extends SurvivorPayload {
  inventory: SurvivorResource[];
}

export interface SurvivorResponse {
  survivor: SurvivorRead;
}
