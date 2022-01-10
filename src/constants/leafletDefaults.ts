import { LatLngLiteral } from "leaflet";

export interface LeafletDefault {
  position: LatLngLiteral;
  attribution: string;
  url: string;
}

export const LEAFLET_DEFAULTS: LeafletDefault = {
  position: {
    lat: 47.0707,
    lng: 15.4395,
  },
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
}