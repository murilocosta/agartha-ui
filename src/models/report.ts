import { ItemRead } from "./item";

export interface ReportData<T> {
  report: T;
}

export interface InfectedPercentageReport {
  infected_percentage: number;
}

export interface AverageResourcesPerSurvivor {
  item: ItemRead;
  item_average: number;
}

export interface TotalResourcesLost {
  item: ItemRead;
  item_quantity_lost: number;
}

export interface InfectedRatioReport {
  name: string;
  value: number;
}
