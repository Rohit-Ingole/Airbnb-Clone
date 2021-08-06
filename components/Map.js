import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import Image from "next/image";

const Map = ({ searchResults, className, dark }) => {
  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  const { latitude, longitude } = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    zoom: 11,
  });

  console.log(searchResults);

  const [selectedLocation, setSelectedLocation] = useState({
    description:
      "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
    img: "https://links.papareact.com/xqj",
    lat: 51.5421655,
    location: "Private room in center of London",
    long: -0.0022275,
    price: "£30 / night",
    star: 4.73,
    title: "Stay at this spacious Edwardian House",
    total: "£117 total",
  });

  return (
    <ReactMapGL
      mapStyle={
        dark
          ? process.env.NEXT_PUBLIC_MAPBOX_STYLE_DARK_URL
          : process.env.NEXT_PUBLIC_MAPBOX_STYLE_LIGHT_URL
      }
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_PUBLIC_TOKEN}
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
      width="100%"
      height="100%"
      className={className}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetTop={-15}
            offsetLeft={-15}
          >
            <p
              onClick={() => {
                setSelectedLocation(result);
              }}
              role="image"
              aria-label="push-pin"
            >
              <LocationMarkerIcon className="h-5 text-red-400 animate-bounce cursor-pointer" />
            </p>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}
              className="w-[150px] h-[250px] z-50 rounded-lg"
            >
              <Image
                src={result.img}
                height="170px"
                width="150px"
                objectFit="cover"
              />
              <br />
              <span className="text-md font-mono font-medium">
                {result.title}
              </span>
              <br />
              <span className="text-sm font-mono font-medium">
                {result.price}
              </span>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
