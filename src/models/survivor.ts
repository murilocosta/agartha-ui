import { LatLngLiteral } from "leaflet";

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

export function convertLocation(position: LatLngLiteral): Location {
  return { latitude: position.lat, longitude: position.lng, timezone: 'UTC' };
}

export function buildLocationString(location?: Location) {
  if (location) {
    const latDirection = location.latitude > 0 ? 'N' : 'S';
    const lngDirection = location.longitude > 0 ? 'E' : 'W';

    const lat = Math.abs(location.latitude).toFixed(4);
    const lng = Math.abs(location.longitude).toFixed(4);

    return `${latDirection}: ${lat} ${lngDirection}: ${lng} (${location.timezone})`;
  }

  return 'Unknown Location';
}
