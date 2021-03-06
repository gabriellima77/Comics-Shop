import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Geocode from 'react-geocode';

export default function Map({ setAddress, setNumber }) {
  Geocode.setLanguage('pt');
  Geocode.setApiKey('AIzaSyCH-fW8IAwAgyAH4l5Nvk6KauBgjcEWDmk');
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCJQIJPpZELHihmeyTXQPanC6CBXHUG7z0',
  });

  const [position, setPosition] = useState({
    lat: -7.236397,
    lng: -39.312682,
  });

  const changePosition = (e) => {
    const { latLng } = e;
    const lat = latLng.lat();
    const lng = latLng.lng();
    setPosition({ lat, lng });
    Geocode.fromLatLng(lat, lng).then(
      (response) => {
        const address = response.results[0].formatted_address;
        if (address) {
          setAddress(response.results[0].address_components);
          setNumber(response.results[0].address_components[0].long_name);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  };

  return (
    <div className="map">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            width: '100%',
            height: '100%',
          }}
          center={position}
          zoom={15}
          onClick={changePosition}
        >
          <Marker position={position} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
}
