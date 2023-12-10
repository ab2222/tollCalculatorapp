import axios from "axios";



const TOLLGURU_API_BASE_URL = 'https://apis.tollguru.com/';



export const fetchTollInfo = async (startLocation, endLocation) => {

  try {

    const response = await axios.post(`${TOLLGURU_API_BASE_URL}`, {

      source: startLocation,

      destination: endLocation,

      vehicleType: '2AxlesAuto', // Adjust the vehicle type as needed

      apiKey: process.env.REACT_APP_TOLLGURU_API_KEY, // Replace with your actual API key

    });



    return response.data;

  } catch (error) {

    console.error('Error fetching toll info:', error);

    throw error;

  }

};