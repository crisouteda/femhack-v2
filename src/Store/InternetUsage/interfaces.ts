import { DataResponse, MessageResponse } from "../../Common/interfaces";

export type InternetUsersInfo = {
  internet_users_percentatge: number;
  internet_users_number: number;
};

export type InternetUsers = {
  [v: string]: InternetUsersInfo;
};

export type FetchInternetUsagePerCountriesResponse = MessageResponse<{
  Countries: string[];
}>;

export type InternetUsersDataMessageResponse = MessageResponse<
  DataResponse<InternetUsers>
>;

export type TotalNumber = {
  Total: number;
};

export type Countries = {
  Countries: string[];
};

export type FetchCountriesResponse = MessageResponse<Countries>;

export type FetchInternetUsagePerYearResponse = MessageResponse<
  DataResponse<TotalNumber>
>;
