import { SortType } from "./shared";

export interface ItemFilter {
  name: string;
  sort: SortType;
  page: number;
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
  icon: string;
  price: number;
  rarity: ItemRarity;
}