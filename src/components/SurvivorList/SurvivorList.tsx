import React from "react";

import { SurvivorRead } from "../../models/survivor";

import SurvivorListItem, { SurvivorListButtonConfig } from "./SurvivorListItem";

export interface SurvivorListProps {
  buttonConfig: SurvivorListButtonConfig;
  survivorList?: SurvivorRead[];
  onSelectSurvivor(selected: SurvivorRead): void;
}

function SurvivorList(props: SurvivorListProps): React.ReactElement<SurvivorListProps> {
  return (
    <>
      {props.survivorList && props.survivorList.length > 0 ? (
        props.survivorList.map((survivor: SurvivorRead) => (
          <SurvivorListItem
            key={survivor.id}
            buttonConfig={props.buttonConfig}
            survivor={survivor}
            onSelect={props.onSelectSurvivor}
          />
        ))
      ) : <></>}
    </>
  );
}

export default SurvivorList;
