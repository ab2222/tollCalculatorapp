import React from 'react';



const TollDetails = ({ toll }) => {

  return (

    <div>

      <h3>Toll Details</h3>

      <p>

        <strong>Toll Location:</strong> {toll.location}

        <br />

        <strong>Cost:</strong> {toll.cost}

      </p>

    </div>

  );

};



export default TollDetails;

