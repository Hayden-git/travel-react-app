//  import React from 'react'
//  import GoogleMapReact from 'google-map-react';

// //  import { Paper, Typography } from '@mui/material';
// //  import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// //  import Rating from '@mui/material/Rating';

// import { MapContainer } from './styles';

//  export default function Map() {
//   // const isMobile = useMediaQuery('(min-width:600px)');

//   const coordinates = { lat: 0, lng: 0 }

//    return (
//      <MapContainer>
//         <GoogleMapReact
//          bootstrapURLKeys={{ key: 'AIzaSyBPzJoOXA9mlaCS0QxF3SLiccJvHQVtHc0' }}
//          defaultCenter={coordinates}
//          center={coordinates}
//          defaultZoom={14}
//          margin={[50, 50, 50, 50]}
//          options={''}
//          onChange={''}
//          onChildClick={''}
//         >
//         </GoogleMapReact>
//        </MapContainer>
//    );
//  };

// import React from 'react';
// import GoogleMapReact from 'google-map-react';
// import { MapContainer, StyledMap, MarkerContainer, Pointer} from './styles';

// export default function Map() {
//   const coordinates = { lat: 0, lng: 0 };

//   return (
//     <MapContainer>
//       <StyledMap>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyBPzJoOXA9mlaCS0QxF3SLiccJvHQVtHc0' }}
//           defaultCenter={coordinates}
//           center={coordinates}
//           defaultZoom={14}
//           margin={[50, 50, 50, 50]}
//           options={''}
//           onChange={''}
//           onChildClick={''}
//         >
//           <MarkerContainer>
//             <Pointer>

//             </Pointer>
//           </MarkerContainer>
//         </GoogleMapReact>
//       </StyledMap>
//     </MapContainer>
//   );
// }

import React from 'react';
import GoogleMapReact from 'google-map-react';
import { MapContainer, StyledMap, MarkerContainer, Pointer } from './styles';

export default function Map() {
  const coordinates = { lat: 0, lng: 0 };

  return (
    <MapContainer>
      <StyledMap>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBPzJoOXA9mlaCS0QxF3SLiccJvHQVtHc0' }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={''}
          onChange={''}
          onChildClick={''}
        >
          <MarkerContainer>
            <Pointer>Marker</Pointer>
          </MarkerContainer>
        </GoogleMapReact>
      </StyledMap>
    </MapContainer>
  );
}

 