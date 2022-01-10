export enum SurvivorGender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}

export interface Location {
  longitude: number;
  latitude: number;
  timezone: string;
}

export interface SurvivorResource {
  item_id: number;
  quantity: number;
}

export interface SurvivorWrite {
  name: string;
  age: number;
  gender: string | SurvivorGender;
  position: Location;
  inventory: SurvivorResource[];
}
