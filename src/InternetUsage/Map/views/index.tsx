import { useEffect, useState } from "react";
import {
  useContextActions,
  useContextState,
} from "../../../Store/InternetUsage/reducer";
import Map from "../../Map/components/map/index";
import { InputNumber, Slider } from "antd";
import ChartTitle from "../../../Common/components/ChartTitle";

const minYear = 1980;
const maxYear = 2020;
const defaultYear = 2000;

const legend = {
  "0-10%": "bg-[#f2ffe5]",
  "10-20%": "bg-[#d8ffb3]",
  "20-30%": "bg-[#beff80]",
  "30-40%": "bg-[#a4ff4d]",
  "40-50%": "bg-[#8aff1a]",
  "50-60%": "bg-[#71e600]",
  "60-70%": "bg-[#58b300]",
  "70-80%": "bg-[#3f8000]",
  "80-90%": "bg-[#264d00]",
  "90-100%": "bg-[#0d1a00]",
};

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
          <div>
            <h5 className='text-lg font-semibold my-6'>Legend</h5>
            {Object.entries(legend).map(([percentage, color]: string[]) => (
              <div
                className='flex justify-between whitespace-nowrap mb-2'
                key={percentage}
              >
                {percentage}{" "}
                <span className={`ml-2 w-[20px] h-[20px] ${color}`} />
              </div>
            ))}
          </div>
        </div>
        <Map data={internetUsagePerYearByCountry ?? {}} />
      </div>
    </div>
  );
};

export default MapView;
