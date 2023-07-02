import { Line } from "@ant-design/plots";

type Props = {
  data: {
    year: string;
    numberOfUsers: number;
  }[];
};

const TotalInternetUsersChart: React.FC<Props> = ({ data }: Props) => {
  return (
    <Line
      className='h-full'
      data={data}
      xField='year'
      padding='auto'
      yField='numberOfUsers'
      slider={{
        start: 0.1,
        end: 0.5,
      }}
      point={{
        shape: "circle",
      }}
    />
  );
};

export default TotalInternetUsersChart;
