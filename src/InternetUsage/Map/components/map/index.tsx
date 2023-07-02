import React from "react";
import * as d3 from "d3";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from "react-simple-maps";
import geoUrl from "./features.json";
import { InternetUsers } from "Store/InternetUsage/interfaces";
import { GeographyType } from "./interface";

const colorScale = d3
  .scaleLinear()
  .domain([0, 100])
  .range(["rgb(242, 255, 229)", "rgb(13, 26, 0)"] as any[]);

type Props = {
  data: InternetUsers;
};
const MapChart: React.FC<Props> = ({ data }: Props) => {
  const dataMapped = Object.keys(data).map((i) => ({ ...data[i], country: i }));

  return (
    <div className='w-[600px]'>
      <ComposableMap
        viewBox='100 100 600 400'
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 100,
        }}
      >
        <Sphere stroke='#E4E5E6' strokeWidth={0.5} id='#mapid' fill='#e8f7fc' />
        <Graticule stroke='#E4E5E6' strokeWidth={0.5} />
        {dataMapped.length > 0 && (
          <Geographies geography={geoUrl}>
            {({ geographies }: { geographies: GeographyType[] }) =>
              geographies.map((geo) => {
                const d = dataMapped.find(
                  (s) => s.country === geo.properties.name
                );
                return (
                  <Geography
                    key={geo.id}
                    geography={geo}
                    strokeWidth={1}
                    stroke='#E4E5E6'
                    fill={
                      d
                        ? colorScale(
                            d.internet_users_percentatge ?? 0
                          ).toString()
                        : "#F5F4F6"
                    }
                  />
                );
              })
            }
          </Geographies>
        )}
      </ComposableMap>
    </div>
  );
};

export default MapChart;
