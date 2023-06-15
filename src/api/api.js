import axios from 'axios';

export const fetchPlacesData = async (sw, ne) => {
  try {
    const { data: { data } } = await axios.get('https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary', {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': 'c14fc2ffc3msh0301d9efb0b7e9fp1ed751jsn0ad917a78da5',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
