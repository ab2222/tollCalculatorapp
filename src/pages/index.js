import React, { useState } from 'react';

import { fetchTollInfo } from '../services/tollGuruService';

import UserEducation from '../components/UserEducation';

import Map from '../components/Map';

//import TollDetails from '../components/TollDetails';



const Home = () => {

  const [routePolyline, setRoutePolyline] = useState('');

  const [tollData, setTollData] = useState([]);

 



  const calculateToll = async () => {

    try {

      const startLocation = 'YourStartLocation';

      const endLocation = 'YourEndLocation';

      const result = await fetchTollInfo(startLocation, endLocation);

      setRoutePolyline(result.polyline);

      setTollData(result.tolls);

    } catch (error) {

      console.error('Error calculating toll:', error);

    }

  };



  return (

    <div>

<UserEducation />

      <button onClick={calculateToll}>Calculate Toll</button>

      <Map routePolyline={routePolyline} tollData={tollData} />

      {/* Render the Map component with routePolyline and tollData */}

    </div>

  );

};



export default Home;
