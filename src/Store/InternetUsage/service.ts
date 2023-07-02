import {
  Countries,
  FetchInternetUsagePerYearResponse,
  InternetUsers,
  InternetUsersDataMessageResponse,
  TotalNumber,
} from "./interfaces";
import client from '../../httpClient';
import { AxiosError, AxiosResponse } from "axios";
import { MessageResponse } from "Common/interfaces";

type FetchInternetUsagePerCountries = () => Promise<string[]>;
export const fetchCountries: FetchInternetUsagePerCountries = async () => await client
  .get('/countries')
  .then((response: AxiosResponse<MessageResponse<Countries>>) => response.data.Countries)
  .catch((error: AxiosError) => {
    console.error(error)
    return[]
  });

type FetchInternetUsagePerCountry = ({
  country_name,
}: {
  country_name: string;
}) => Promise<InternetUsers| never[]>;
export const fetchInternetUsagePerCountry: FetchInternetUsagePerCountry =
  async ({ country_name }) => await client
  .get(`/country/${country_name}`)
  .then((response: AxiosResponse<InternetUsersDataMessageResponse>) => {
    return response.data.Data})
  .catch((error: AxiosError) => {
      console.error(error)
      return {}
    });



type FetchInternetUsagePerCountryAndYear = ({
  country_name,
  year,
}: {
  country_name: string;
  year: number;
}) => Promise<InternetUsers| never[]>;
export const fetchInternetUsagePerCountryAndYear: FetchInternetUsagePerCountryAndYear =
  async ({ country_name, year }) => await client
  .get(`/country/${country_name}year/${year}`)
  .then((response: AxiosResponse<InternetUsersDataMessageResponse>) => response.data.Data)
  .catch((error: AxiosError) => {
      console.error(error)
      
      return {}
    });



type FetchInternetUsagePerYearByCountry = ({
  year,
}: {
  year: number;
}) => Promise<InternetUsers>;
export const fetchInternetUsagePerYearByCountry: FetchInternetUsagePerYearByCountry =
  async ({ year }) => await client
  .get(`/year/${year}`)
  .then((response: AxiosResponse<InternetUsersDataMessageResponse>) => response.data.Data)
  .catch((error: AxiosError) => {
      console.error(error)
      return {}
    });

type FetchInternetUsagePerYear = ({
  year,
}: {
  year: number;
}) => Promise<TotalNumber>;
export const fetchInternetUsageInYear: FetchInternetUsagePerYear = async ({
  year,}) => await client
  .get(`/internet-users/${year}`)
  .then((response: AxiosResponse<FetchInternetUsagePerYearResponse>) => response.data.Data)
  .catch((error: AxiosError) => {
    console.error(error)
    return {Total: 0 }
  });