import { useEffect, useState } from "react";
import UsersXYearChart from "../components/chart";
import {
  useContextActions,
  useContextState,
} from "../../../Store/InternetUsage/reducer";
import ListSelect from "../../../Common/components/ListSelect";
import ChartTitle from "../../../Common/components/ChartTitle";
import { Select } from "antd";

type Props = {
  countries: string[];
};
const displayOptions = [
  { label: "Absolute number", value: "internet_users_number" },
  { label: "Percentage", value: "internet_users_percentatge" },
];

const UsersXYearView: React.FC<Props> = ({ countries }: Props) => {
  const [selectedCountries, setSelectedCountries] = useState(["Spain"]);
  const { handleFetchInternetUsagePerCountry } = useContextActions();
  const { internetUsagePerCountries } = useContextState();
  const [display, setDisplay] = useState<
    "internet_users_number" | "internet_users_percentatge"
  >("internet_users_number");

  useEffect(() => {
    const requestedCountries = new Set(
      internetUsagePerCountries?.map((c) => c.country)
    );
    selectedCountries.forEach((country) => {
      if (!requestedCountries.has(country))
        handleFetchInternetUsagePerCountry(country);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountries]);

  return (
    <div className='flex flex-col w-full'>
      {
        <ChartTitle>
          {!countries.length || !selectedCountries.length
            ? "Select a Country"
            : "Users per year"}
        </ChartTitle>
      }
      <div className='flex flex-col'>
        <ListSelect
          multiple
          data={countries}
          onChange={setSelectedCountries}
          placeholder='Select countries'
        />
      </div>
      <div className='flex flex-col'>
        <Select
          options={displayOptions}
          onChange={setDisplay}
          placeholder='Select countries'
        />
      </div>
      <UsersXYearChart
        display={display}
        data={
          internetUsagePerCountries?.filter((c) =>
            selectedCountries.includes(c.country)
          ) ?? []
        }
      />
    </div>
  );
};

export default UsersXYearView;
