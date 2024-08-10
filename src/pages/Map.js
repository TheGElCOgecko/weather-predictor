import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 35.0348,
    lng: -78.7627
};

const Map = () => {
    return (
        <LoadScript googleMapsApiKey={process.env.API_KEY}>
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
        >
            <Marker position={center} />
            {/* Add more components like Marker, InfoWindow, etc. */}
        </GoogleMap>
        </LoadScript>
    );
};

export default Map;
