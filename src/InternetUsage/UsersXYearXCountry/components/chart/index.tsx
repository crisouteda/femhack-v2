import { Line } from "@ant-design/plots";
import { InternetUsers } from "Store/InternetUsage/interfaces";

type Props = {
  data: {
    data: InternetUsers;
    country: string;
  }[];
  display: "internet_users_number" | "internet_users_percentatge";
};
const UsersXYearChart: React.FC<Props> = ({ data, display }: Props) => {
  if (!Object.keys(data).length)
    return (
      <span className='self-center'>
        There is no data for the selected countries.
      </span>
    );

  const dataChart = data.flatMap((c) =>
    Object.entries(c.data)
      .map(([key, val]) => ({
        ...val,
        year: key,
        country: c.country,
      }))
      .sort((a, b) => parseInt(a.year) - parseInt(b.year))
  );

  return (
    <Line
      smooth={true}
      className='w-full'
      data={dataChart}
      xField='year'
      yField={display}
      seriesField='country'
      point={{
        shape: "circle",
      }}
      yAxis={{
        label: {
          style: {
            fill: "#6E759F",
          },
        },
      }}
      slider={{
        start: 0.1,
        end: 0.5,
      }}
      meta={{
        year: {
          alias: "Year",
        },
        numberUsers: {
          alias: "Number of Internet Users",
        },
      }}
    />
  );
};

export default UsersXYearChart;
