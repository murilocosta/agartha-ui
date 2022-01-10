import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

import { LEAFLET_DEFAULTS } from '../constants/leafletDefaults';

function SurvivorRegistrationMap(): React.ReactElement {
  return (
    <MapContainer
      style={{ height: 400 }}
      center={LEAFLET_DEFAULTS.position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution={LEAFLET_DEFAULTS.attribution}
        url={LEAFLET_DEFAULTS.url}
      />
      <Marker position={LEAFLET_DEFAULTS.position} />
    </MapContainer>
  );
}

export default SurvivorRegistrationMap;
