import { ItemRead } from "./item";

export interface InventoryItemRead {
  resource_id: number;
  quantity: number;
  item: ItemRead;
}

export interface InventoryRead {
  id: number;
  survivor_id: number;
  items: InventoryItemRead[];
}
