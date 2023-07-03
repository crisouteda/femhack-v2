import {
  useContextActions,
  useContextState,
} from "../../../Store/InternetUsage/reducer";
import { Ref, useEffect, useRef } from "react";
import UsersXYearView from "../../UsersXYearXCountry/views";
import MapView from "../../Map/views";
import { Button, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { CarouselRef } from "antd/es/carousel";
import Card from "../../../Common/components/Card";
import TotalInternetUsers from "../../TotalInternetUsers/views";
import { arrayRange } from "../../../Common/helpers";
import TopTenView from "../../TopTen/views";

const years = arrayRange(1980, 2020, 1);

const Dashboard: React.FC = () => {
  const { handleFetchCountries, handleFetchInternetUsageInYear } =
    useContextActions();
  const { countries } = useContextState();
  const ref: Ref<CarouselRef> | undefined = useRef(null);

  const views = [
    { key: "totalUsers", component: <TotalInternetUsers /> },
    {
      key: "usersPerYear",
      component: <UsersXYearView countries={countries || []} />,
    },
    {
      key: "topTen",
      component: <TopTenView countries={countries || []} years={years} />,
    },
    {
      key: "map",
      component: <MapView />,
    },
  ];

  useEffect(() => {
    handleFetchCountries();
  }, [handleFetchCountries]);

  useEffect(() => {
    years.forEach((year) => {
      handleFetchInternetUsageInYear(year);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Carousel
        draggable
        effect='scrollx'
        dots={false}
        className='w-full h-full'
        ref={ref}
      >
        {views.map((view) => (
          <Card key={view.key}>
            <Button
              className='prev-button'
              onClick={() => {
                ref.current?.prev();
              }}
            >
              <LeftOutlined />
            </Button>
            <Button
              className='next-button'
              onClick={() => {
                ref.current?.next();
              }}
            >
              <RightOutlined />
            </Button>
            {view.component}
          </Card>
        ))}
      </Carousel>
    </>
  );
};

export default Dashboard;
