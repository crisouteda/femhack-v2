import { useReducer, useMemo, createContext, useContext } from "react";

import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAIL,
  FETCH_INTERNET_USAGE_PER_COUNTRY,
  FETCH_INTERNET_USAGE_PER_COUNTRY_SUCCESS,
  FETCH_INTERNET_USAGE_PER_COUNTRY_FAIL,
  FETCH_INTERNET_USAGE_PER_COUNTRY_AND_YEAR,
  FETCH_INTERNET_USAGE_PER_COUNTRY_AND_YEAR_SUCCESS,
  FETCH_INTERNET_USAGE_PER_COUNTRY_AND_YEAR_FAIL,
  FETCH_INTERNET_USAGE_PER_YEAR_BY_COUNTRY,
  FETCH_INTERNET_USAGE_PER_YEAR_BY_COUNTRY_SUCCESS,
  FETCH_INTERNET_USAGE_PER_YEAR_BY_COUNTRY_FAIL,
  FETCH_INTERNET_USAGE_IN_YEAR,
  FETCH_INTERNET_USAGE_IN_YEAR_SUCCESS,
  FETCH_INTERNET_USAGE_IN_YEAR_FAIL,
} from "./actions";
import actions, { ActionsType } from "./context";
import { InternetUsers, TotalNumber } from "./interfaces";
import { Message } from "../../Common/interfaces";

// Interface for the state
interface State {
  countries: string[];
  countriesLoading: boolean;
  countriesError: Message | null;

  internetUsagePerCountry: InternetUsers;
  internetUsagePerCountries: {
    country: string;
    data: InternetUsers;
  }[];
  internetUsagePerCountryLoading: boolean;
  internetUsagePerCountryError: Message | null;

  internetUsagePerCountryAndYear: InternetUsers;
  internetUsagePerCountryAndYearLoading: boolean;
  internetUsagePerCountryAndYearError: Message | null;

  internetUsagePerYearByCountry: InternetUsers;
  internetUsagePerYearByCountryLoading: boolean;
  internetUsagePerYearByCountryError: Message | null;
  internetUsagePerYearByCountries: { year: number; data: InternetUsers }[];

  internetUsageInYear: TotalNumber;
  internetUsageInYearLoading: boolean;
  internetUsageInYearError: Message | null;

  internetUsageTotalPerYear: {
    year: string;
    numberOfUsers: number;
  }[];
}

const StateContext = createContext<Partial<State>>({});
const DispatchContext = createContext<Partial<ActionsType>>({});

const initialState: State = {
  countries: [],
  countriesLoading: false,
  countriesError: null,

  internetUsagePerCountry: {},
  internetUsagePerCountries: [],
  internetUsagePerCountryLoading: false,
  internetUsagePerCountryError: null,

  internetUsagePerCountryAndYear: {},
  internetUsagePerCountryAndYearLoading: false,
  internetUsagePerCountryAndYearError: null,

  internetUsagePerYearByCountry: {},
  internetUsagePerYearByCountries: [],
  internetUsagePerYearByCountryLoading: false,
  internetUsagePerYearByCountryError: null,

  internetUsageInYear: { Total: 0 },
  internetUsageInYearLoading: false,
  internetUsageInYearError: null,

  internetUsageTotalPerYear: [],
};

function reducer(state: State, action: { type: string; payload: any }) {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        countriesLoading: true,
        countriesError: null,
      };
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload,
        countriesLoading: false,
      };
    case FETCH_COUNTRIES_FAIL:
      return {
        ...state,
        countriesLoading: false,
        countriesError: action.payload,
      };
    case FETCH_INTERNET_USAGE_PER_COUNTRY:
      return {
        ...state,
        internetUsagePerCountryLoading: true,
        internetUsagePerCountryError: null,
      };
    case FETCH_INTERNET_USAGE_PER_COUNTRY_SUCCESS:
      const fetchedCountries = state.internetUsagePerCountries.map(
        (c) => c.country
      );
      const isCountryIncluded = fetchedCountries.includes(
        action.payload.country
      );
      if (isCountryIncluded)
        return {
          ...state,
          internetUsagePerCountryLoading: false,
          internetUsagePerCountry: action.payload.data,
        };
      return {
        ...state,
        internetUsagePerCountryLoading: false,
        internetUsagePerCountry: action.payload.data,
        internetUsagePerCountries: [
          ...state.internetUsagePerCountries,
          action.payload,
        ],
      };
    case FETCH_INTERNET_USAGE_PER_COUNTRY_FAIL:
      return {
        ...state,
        internetUsagePerCountryLoading: false,
        internetUsagePerCountryError: action.payload,
      };
    case FETCH_INTERNET_USAGE_PER_COUNTRY_AND_YEAR:
      return {
        ...state,
        internetUsagePerCountryAndYearLoading: true,
        internetUsagePerCountryAndYearError: null,
      };
    case FETCH_INTERNET_USAGE_PER_COUNTRY_AND_YEAR_SUCCESS:
      return {
        ...state,
        internetUsagePerCountryAndYearLoading: false,
        internetUsagePerCountryAndYear: action.payload,
      };
    case FETCH_INTERNET_USAGE_PER_COUNTRY_AND_YEAR_FAIL:
      return {
        ...state,
        internetUsagePerCountryAndYearLoading: false,
        internetUsagePerCountryAndYearError: action.payload,
      };

    case FETCH_INTERNET_USAGE_PER_YEAR_BY_COUNTRY:
      return {
        ...state,
        internetUsagePerYearByCountryLoading: true,
        internetUsagePerYearByCountryError: null,
      };
    case FETCH_INTERNET_USAGE_PER_YEAR_BY_COUNTRY_SUCCESS:
      const fetchedYears = state.internetUsagePerYearByCountries.map(
        (c) => c.year
      );
      const isYearIncluded = fetchedYears.includes(action.payload.year);
      if (isYearIncluded)
        return {
          ...state,
          internetUsagePerYearByCountryLoading: false,
          internetUsagePerYearByCountry: action.payload.data,
        };
      return {
        ...state,
        internetUsagePerYearByCountryLoading: false,
        internetUsagePerYearByCountry: action.payload.data,
        internetUsagePerYearByCountries: [
          ...state.internetUsagePerYearByCountries,
          action.payload,
        ].sort((a, b) => a.year - b.year),
      };
    case FETCH_INTERNET_USAGE_PER_YEAR_BY_COUNTRY_FAIL:
      return {
        ...state,
        internetUsagePerYearByCountryLoading: false,
        internetUsagePerYearByCountryError: action.payload,
      };

    case FETCH_INTERNET_USAGE_IN_YEAR:
      return {
        ...state,
        internetUsageInYearLoading: true,
        internetUsageInYearError: null,
      };
    case FETCH_INTERNET_USAGE_IN_YEAR_SUCCESS:
      return {
        ...state,
        internetUsageInYearLoading: false,
        internetUsageInYear: action.payload,
        internetUsageTotalPerYear: [
          ...state.internetUsageTotalPerYear,
          action.payload,
        ].sort((a, b) => a.year - b.year),
      };
    case FETCH_INTERNET_USAGE_IN_YEAR_FAIL:
      return {
        ...state,
        internetUsageInYearLoading: false,
        internetUsageInYearError: action.payload,
      };
    default:
      return state;
  }
}

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const memorizedDispatchedFunctions = useMemo(() => {
    const dispatchedFunctions = {};
    Object.keys(actions).forEach((actionName: string) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dispatchedFunctions[actionName] = actions[actionName](dispatch);
    });
    return dispatchedFunctions;
  }, []);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={memorizedDispatchedFunctions}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

function useContextState() {
  const context: Partial<State> = useContext(StateContext);
  if (context === undefined) {
    throw new Error(
      "useInternetUsageState must be used within a InternetUsageProvider"
    );
  }
  return context;
}

function useContextActions() {
  const context = useContext(DispatchContext);
  if (context === undefined) {
    throw new Error(
      "useInternetUsageActions must be used within a InternetUsageProvider"
    );
  }
  return context;
}

export { ContextProvider, useContextActions, useContextState };
