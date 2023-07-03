import { useEffect } from "react";
import {
  useContextActions,
  useContextState,
} from "../../../Store/InternetUsage/reducer";
import ChartTitle from "../../../Common/components/ChartTitle";
import TopTenChart from "../components/chart";

type Props = {
  countries: string[];
  years: number[];
};

const TopTenView: React.FC<Props> = ({ countries, years }: Props) => {
  const { handleFetchInternetUsagePerYearByCountry } = useContextActions();
  const { internetUsagePerYearByCountries } = useContextState();

  useEffect(() => {
    const requestedYears = new Set(
      internetUsagePerYearByCountries?.map((c) => c.year)
    );
    years.forEach((year) => {
      if (!requestedYears.has(year))
        handleFetchInternetUsagePerYearByCountry(year);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries]);

  return (
    <div className='flex flex-col w-full'>
      <ChartTitle>Top 10 Number of Internet Users Per Year</ChartTitle>
      <TopTenChart data={internetUsagePerYearByCountries || []} />
    </div>
  );
};

export default TopTenView;
