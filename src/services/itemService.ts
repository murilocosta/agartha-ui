import { AxiosInstance } from "axios";
import { ItemFilter, ItemRead } from "../models/item";
import connector from "./connector";

class ItemService {
  constructor(private api: AxiosInstance) { }

  public async getAll(filter?: ItemFilter): Promise<ItemRead[]> {
    const res = await this.api.get<ItemRead[]>('/items', { params: filter });
    return res.data;
  }
}

export default new ItemService(connector);
