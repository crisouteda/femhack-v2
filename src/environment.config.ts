import configJson from "./config.json";

export const IS_STAGING = /staging|localhost/.test(window.location.href);

interface IConfig {
  isStaging: boolean;
  apiBase: string;
}

export const Config: IConfig = {
  isStaging: IS_STAGING,
  apiBase: IS_STAGING
    ? configJson.API_BASE.STAGING
    : configJson.API_BASE.PRODUCTION,
};
