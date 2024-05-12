export type TSchdule = {
  id?: string;
  startDateTime: string;
  endDateTime: string;
};
export type TSchduleFrom = {
  startData: string;
  endDate: string;
  startTime: string;
  endTime: string;
};

import { TMeta } from "../common";
export interface Schedule {
  id?: string;
  startDateTime: string;
  endDateTime: string;
}
export interface ScheduleResponse {
  schedules: {
    data: Schedule[];
  };
  meta?: TMeta;
}
