import Map, { MapProps } from "react-map-gl";

import "./mapir.css";

type IMap = typeof Map;

type MapirProps = Omit<MapProps, "mapboxAccessToken"> & { MapirToken: string };

const MapirWrapper = (Map: IMap) => {
  return (props: MapirProps) => {
    return (
      // @ts-ignore
      <Map
        {...props}
        mapboxAccessToken=""
        transformRequest={(url: string) => {
          return {
            url,
            headers: {
              "x-api-key": props.MapirToken, //Mapir api key
            },
          };
        }}
      />
    );
  };
};

const Mapir = MapirWrapper(Map);

export default Mapir;
