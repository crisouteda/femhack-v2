import { Column } from "@ant-design/plots";
import { InternetUsers } from "Store/InternetUsage/interfaces";

type Props = {
  data:
    | {
        data: InternetUsers;
        year: number;
      }[];
};
const TopTenChart: React.FC<Props> = ({ data }: Props) => {
  if (!data || !Object.keys(data).length)
    return <span className='self-center'>There is no data.</span>;

  const dataChart = data.map((c) =>
    Object.entries(c.data).map(([key, val]) => ({
      ...val,
      year: c.year,
      country: key,
    }))
  );

  const top10FilteredData = dataChart.map((c) =>
    c
      .sort((a, b) => b.internet_users_number - a.internet_users_number)
      .slice(0, 10)
  );

  const top10DataSorted = top10FilteredData
    .flat()
    .filter((c) => c.internet_users_percentatge !== 0)
    .sort((a, b) => a.year - b.year);

  return (
    <Column
      className='w-full'
      data={top10DataSorted}
      xField='year'
      yField='internet_users_number'
      isStack={true}
      seriesField='country'
      label={false}
      slider={{
        start: 0.1,
        end: 0.5,
      }}
    />
  );
};

export default TopTenChart;
