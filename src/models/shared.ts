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

export enum SortType {
  ASCENDENT = 'asc',
  DESCENDENT = 'desc',
}
