import {
  fetchCountries,
  fetchInternetUsageInYear,
  fetchInternetUsagePerCountry,
  fetchInternetUsagePerCountryAndYear,
  fetchInternetUsagePerYearByCountry,
} from "./service";
import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_FAIL,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_INTERNET_USAGE_PER_COUNTRY,
  FETCH_INTERNET_USAGE_PER_COUNTRY_AND_YEAR,
  FETCH_INTERNET_USAGE_PER_COUNTRY_AND_YEAR_FAIL,
  FETCH_INTERNET_USAGE_PER_COUNTRY_AND_YEAR_SUCCESS,
  FETCH_INTERNET_USAGE_PER_COUNTRY_FAIL,
  FETCH_INTERNET_USAGE_PER_COUNTRY_SUCCESS,
  FETCH_INTERNET_USAGE_PER_YEAR_BY_COUNTRY,
  FETCH_INTERNET_USAGE_PER_YEAR_BY_COUNTRY_FAIL,
  FETCH_INTERNET_USAGE_PER_YEAR_BY_COUNTRY_SUCCESS,
  FETCH_INTERNET_USAGE_IN_YEAR,
  FETCH_INTERNET_USAGE_IN_YEAR_FAIL,
  FETCH_INTERNET_USAGE_IN_YEAR_SUCCESS,
} from "./actions";

export interface ActionsType {
  handleFetchCountries: any;
  handleFetchInternetUsagePerCountry: any;
  handleFetchInternetUsagePerCountryAndYear: any;
  handleFetchInternetUsageInYear: any;
  handleFetchInternetUsagePerYearByCountry: any;
}

function handleFetchCountries(dispatch: React.Dispatch<any>) {
  return async function () {
    dispatch({ type: FETCH_COUNTRIES });
    try {
      const response = await fetchCountries();
      dispatch({ type: FETCH_COUNTRIES_SUCCESS, payload: response });
    } catch (e) {
      dispatch({ type: FETCH_COUNTRIES_FAIL, payload: e });
    }
  };
}

function handleFetchInternetUsagePerCountry(dispatch: React.Dispatch<any>) {
  return async function (country_name: string) {
    dispatch({ type: FETCH_INTERNET_USAGE_PER_COUNTRY });
    try {
      const response = await fetchInternetUsagePerCountry({ country_name });
      dispatch({
        type: FETCH_INTERNET_USAGE_PER_COUNTRY_SUCCESS,
        payload: {
          country: country_name,
          data: response
        }
      });
    } catch (e) {
      dispatch({ type: FETCH_INTERNET_USAGE_PER_COUNTRY_FAIL, payload: e });
    }
  };
}

function handleFetchInternetUsagePerCountryAndYear(
  dispatch: React.Dispatch<any>
) {
  return async function (country_name: string, year: number) {
    dispatch({ type: FETCH_INTERNET_USAGE_PER_COUNTRY_AND_YEAR });
    try {
      const response = await fetchInternetUsagePerCountryAndYear({
        country_name,
        year,
      });
      dispatch({
        type: FETCH_INTERNET_USAGE_PER_COUNTRY_AND_YEAR_SUCCESS,
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: FETCH_INTERNET_USAGE_PER_COUNTRY_AND_YEAR_FAIL,
        payload: e,
      });
    }
  };
}

function handleFetchInternetUsagePerYearByCountry(
  dispatch: React.Dispatch<any>
) {
  return async function (year: number) {
    dispatch({ type: FETCH_INTERNET_USAGE_PER_YEAR_BY_COUNTRY });
    try {
      const response = await fetchInternetUsagePerYearByCountry({ year });
      dispatch({
        type: FETCH_INTERNET_USAGE_PER_YEAR_BY_COUNTRY_SUCCESS,
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: FETCH_INTERNET_USAGE_PER_YEAR_BY_COUNTRY_FAIL,
        payload: e,
      });
    }
  };
}

function handleFetchInternetUsageInYear(dispatch: React.Dispatch<any>) {
  return async function (year: number) {
    dispatch({ type: FETCH_INTERNET_USAGE_IN_YEAR });
    try {
      const response = await fetchInternetUsageInYear({ year });
      dispatch({
        type: FETCH_INTERNET_USAGE_IN_YEAR_SUCCESS,
        payload: {
          year,
          numberOfUsers: response.Total
        },
      });
    } catch (e) {
      dispatch({ type: FETCH_INTERNET_USAGE_IN_YEAR_FAIL, payload: e });
    }
  };
}

const actions = {
  handleFetchCountries,
  handleFetchInternetUsagePerCountry,
  handleFetchInternetUsagePerCountryAndYear,
  handleFetchInternetUsagePerYearByCountry,
  handleFetchInternetUsageInYear,
};

export default actions;
