import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngLiteral } from 'leaflet';

import { LEAFLET_DEFAULTS } from '../constants/leafletDefaults';
import SurvivorRegistrationMapMarker from './SurvivorRegistrationMapMarker';

export interface RegistrationMapProps {
  setPosition(position: LatLngLiteral): void;
}

function SurvivorRegistrationMap(props: RegistrationMapProps): React.ReactElement<RegistrationMapProps> {
  const [position, setPosition] = useState(LEAFLET_DEFAULTS.position);

  return (
    <MapContainer
      style={{ height: 400 }}
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution={LEAFLET_DEFAULTS.attribution}
        url={LEAFLET_DEFAULTS.url}
      />
      <SurvivorRegistrationMapMarker
        position={position}
        setPosition={(position: LatLngLiteral) => {
          setPosition(position);
          props.setPosition(position);
        }}
      />
    </MapContainer>
  );
}

export default SurvivorRegistrationMap;
