import React from 'react';

import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';

import { decode } from '@googlemaps/polyline-codec';

import TollDetails from './TollDetails';



const Map = ({ routePolyline, tollData }) => {

  // Decode the polyline received from TollGuru API

  const decodedPolyline = decode(routePolyline);



  // Map styles (optional, adjust as needed)

  const mapStyles = {

    height: '500px',

    width: '100%',

  };



  // Center coordinates (example: San Francisco, CA)

  const centerCoordinates = [37.7749, -122.4194];



  return (

    <MapContainer center={centerCoordinates} zoom={12} style={mapStyles}>

      {/* OpenStreetMap Tile Layer */}

      <TileLayer

        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

      />



      {/* Display the decoded polyline */}

      <Polyline positions={decodedPolyline} color="blue" />



      {/* Markers for toll information */}

      {tollData.map((toll, index) => (

        <Marker key={index} position={[toll.lat, toll.lng]}>

          <Popup>

            {/* Render TollDetails component with toll data */}

            <TollDetails toll={toll} />

          </Popup>

        </Marker>

      ))}

    </MapContainer>

  );

};



export default Map;