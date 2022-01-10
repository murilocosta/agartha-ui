import { selector } from "recoil";
import { ItemRead } from "../models/item";
import itemService from "../services/itemService";

export const itemListSelector = selector({
  key: 'itemListSelector',
  get: async (): Promise<ItemRead[]> => {
    return await itemService.getAll();
  }
});
