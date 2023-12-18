export interface SportType {
  Id: number;
  IsTopLeague: 0 | 1;
  HasTopLeague: 0 | 1;
  Active: "active" | "";
  SportTypeName: string;
  CurrentGameCount: number;
}
