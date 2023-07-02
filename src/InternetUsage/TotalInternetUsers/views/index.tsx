import TotalInternetUsersChart from "../components/chart";
import { useContextState } from "../../../Store/InternetUsage/reducer";
import ChartTitle from "../../../Common/components/ChartTitle";

const TotalInternetUsers: React.FC = () => {
  const { internetUsageTotalPerYear } = useContextState();

  return (
    <div className='flex flex-col w-full'>
      <ChartTitle>Total Number of Internet Users per Year</ChartTitle>
      <TotalInternetUsersChart data={internetUsageTotalPerYear || []} />
    </div>
  );
};

export default TotalInternetUsers;
