"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  DirectionsRenderer,
  GoogleMap,
  MarkerF,
  OverlayView,
  OverlayViewF,
  useJsApiLoader,
} from "@react-google-maps/api";

import { SourceContext } from "../../public/context/SourceContext";
import { DestinationContext } from "../../public/context/DestinationContext";

function GoogleMapSection() {
  const containerStyle = {
    width: "100%",
    height: window.innerWidth * 0.45,
  };
  const { source, setSource } = useContext(SourceContext);
  const { destination, setDestination } = useContext(DestinationContext);

  const [center, setCenter] = useState({
    lat: 28.8291,
    lng: 77.56989,
  });

  const [map, setMap] = React.useState(null);
  const [directionRoutePoints, setDirectionRoutePoints] = useState([]);

  useEffect(() => {
    if (source?.length != [] && map) {
      map.panTo({
        lat: source.lat,
        lng: source.lng,
      });

      setCenter({
        lat: source.lat,
        lng: source.lng,
      });
    }

    if (source.length != [] && destination.length != []) {
      console.log("DIE");
      directionRoute();
    }
  }, [source]);

  useEffect(() => {
    if (destination?.length != [] && map) {
      setCenter({
        lat: destination.lat,
        lng: destination.lng,
      });
    }

    if (source.length != [] && destination.length != []) {
      console.log("DIE");
      directionRoute();
    }
  }, [destination]);

  const directionRoute = () => {
    const DirectionService = new google.maps.DirectionsService();
    // Console.log("DIE");
    DirectionService.route(
      {
        origin: { lat: source.lat, lng: source.lng },
        destination: { lat: destination.lat, lng: destination.lng },
        travelMode: google.maps.TravelMode.WALKING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirectionRoutePoints(result);
        } else {
          console.error("error");
        }
      }
    );
  };
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={11}
      onLoad={(map) => setMap(map)}
      // onUnmount={onUnmount}
      options={{ mapId: "70fcd7bbf1fcf814" }}
    >
      {source.length != [] ? (
        <MarkerF
          position={{ lat: source.lat, lng: source.lng }}
          icon={{
            url: "/image/source.png",
            scaledSize: {
              width: 20,
              height: 20,
            },
          }}
        >
          <OverlayViewF
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            position={{ lat: source.lat, lng: source.lng }}
          >
            <div className="p-2 bg-white font-bold inline-block">
              <p className="text-black text-[16px">{source.label}</p>
            </div>
          </OverlayViewF>
        </MarkerF>
      ) : null}

      {destination.length != [] ? (
        <MarkerF
          position={{ lat: destination.lat, lng: destination.lng }}
          icon={{
            url: "/image/destn.png",
            scaledSize: {
              width: 20,
              height: 20,
            },
          }}
        >
          <OverlayViewF
            position={{ lat: destination.lat, lng: destination.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className="p-2 bg-white font-bold inline-block">
              <p className="text-black text-[16px">{destination.label}</p>
            </div>
          </OverlayViewF>
        </MarkerF>
      ) : null}

      <DirectionsRenderer
        directions={directionRoutePoints}
        options={{
          polylineOptions: { strokeColor: "black", strokeWeight: 5 },

          suppressMarkers: true,
        }}
      />
    </GoogleMap>
  );
}

export default GoogleMapSection;
