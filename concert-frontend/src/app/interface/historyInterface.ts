import { UserAction } from "../config/userAction";

export interface HistoryInterface {
  id: string;
  timestamp: string;
  concertName: string;
  username: string;
  action: UserAction;
}
