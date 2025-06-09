import { UserAction } from "../config/UserAction";

export interface HistoryInterface {
  id: string;
  timestamp: string;
  concertName: string;
  username: string;
  action: UserAction;
}
