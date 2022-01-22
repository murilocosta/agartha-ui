import { Location } from "./location";
import { SortType } from "./shared";

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

export interface SurvivorFilter {
  name?: string;
  sort?: SortType;
  page?: number;
  page_items?: number;
}

export function buildSurvivorFilterQuery(filter?: SurvivorFilter): string {
  if (!filter) {
    return '';
  }

  const query = [];

  if (filter.name) {
    query.push(`name=${filter.name}`);
  }

  if (filter.sort) {
    query.push(`sort=${filter.sort}`);
  }

  if (filter.page) {
    query.push(`page=${filter.page}`);
  }

  if (query.length === 0) {
    return '';
  }

  return '?' + query.join('&');
}
