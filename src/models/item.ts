import { SortType } from "./shared";

export enum ItemIconType {
  Food = 'food-icon',
  Medicine = 'medicine-icon',
  Water = 'water-icon',
  Weapon = 'weapon-icon',
  Unknown = 'unknown-icon',
}

export interface ItemIconMap {
  [type: string]: React.FunctionComponent
}

export enum ItemRarity {
  Common = 'Common',
  Uncommon = 'Uncommon',
  Rare = 'Rare',
  Epic = 'Epic',
}

export interface ItemRead {
  id: number;
  name: string;
  icon: ItemIconType;
  price: number;
  rarity: ItemRarity;
}

export interface ItemFilter {
  name?: string;
  sort?: SortType;
  page?: number;
}

export function buildItemFilterQuery(filter?: ItemFilter): string {
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
