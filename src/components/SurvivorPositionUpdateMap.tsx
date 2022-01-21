import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngLiteral } from 'leaflet';

import { LEAFLET_DEFAULTS } from '../constants/leafletDefaults';
import SurvivorRegistrationMapMarker from './SurvivorRegistrationMapMarker';

export interface PositionUpdateMapProps {
  position: LatLngLiteral;
  setPosition(position: LatLngLiteral): void;
}

function SurvivorPositionUpdateMap(props: PositionUpdateMapProps): React.ReactElement {
  return (
    <MapContainer
      style={{ height: 400 }}
      center={props.position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution={LEAFLET_DEFAULTS.attribution}
        url={LEAFLET_DEFAULTS.url}
      />
      <SurvivorRegistrationMapMarker
        position={props.position}
        setPosition={(position: LatLngLiteral) => {
          props.setPosition(position);
        }}
      />
    </MapContainer>
  );
}

export default SurvivorPositionUpdateMap;
