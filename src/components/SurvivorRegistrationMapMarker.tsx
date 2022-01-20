import React from 'react';
import { Marker, useMapEvents } from 'react-leaflet';
import { LatLngLiteral, LeafletMouseEvent } from 'leaflet';

export interface MapMarkerProps {
  position: LatLngLiteral;
  setPosition(position: LatLngLiteral): void;
}

function SurvivorRegistrationMapMarker(props: MapMarkerProps): React.ReactElement<MapMarkerProps> {
  const mapEventHandler = useMapEvents({
    click(e: LeafletMouseEvent) {
      props.setPosition(e.latlng.wrap());
      mapEventHandler.flyTo(e.latlng, mapEventHandler.getZoom());
    },
  });

  return (
    <Marker position={props.position} />
  );
}

export default SurvivorRegistrationMapMarker;
