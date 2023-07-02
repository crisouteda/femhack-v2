import { useEffect, useState } from "react";
import {
  useContextActions,
  useContextState,
} from "../../../Store/InternetUsage/reducer";
import Map from "../../Map/components/map/index";
import { InputNumber, Slider } from "antd";
import ChartTitle from "../../../Common/components/ChartTitle";
import Legend from "../components/legend";

const minYear = 1980;
const maxYear = 2020;
const defaultYear = 2000;

const MapView: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState(defaultYear);
  const { handleFetchInternetUsagePerYearByCountry } = useContextActions();
  const { internetUsagePerYearByCountry } = useContextState();

  useEffect(() => {
    handleFetchInternetUsagePerYearByCountry(selectedYear);
  }, [handleFetchInternetUsagePerYearByCountry, selectedYear]);

  return (
    <div className='w-full'>
      <ChartTitle>
        Percentage of people using internet in {selectedYear}
      </ChartTitle>
      <div className='flex justify-around w-full'>
        <div className='self-center'>
          <h5 className='text-lg font-semibold w-full '>Select a year</h5>
          <div className='flex flex-wrap'>
            <Slider
              className='w-[200px]'
              min={minYear}
              max={maxYear}
              onChange={setSelectedYear}
              value={selectedYear}
            />
            <InputNumber
              value={selectedYear}
              onChange={(n: number | null) => setSelectedYear(n ?? defaultYear)}
              placeholder='Select a year'
              max={maxYear}
              min={minYear}
            />
          </div>
          <Legend />
        </div>
        <Map data={internetUsagePerYearByCountry ?? {}} />
      </div>
    </div>
  );
};

export default MapView;
