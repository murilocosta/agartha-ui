import React from 'react';

import { Avatar, Button, Center, Grid, GridItem } from '@chakra-ui/react';

import { SurvivorRead } from '../../models/survivor';

export interface SurvivorListButtonConfig {
  buttonIcon: React.ReactElement;
  buttonText: string;
  buttonColor: string;
}

export interface SurvivorListItemProps {
  buttonConfig: SurvivorListButtonConfig;
  survivor: SurvivorRead;
  onSelect(selected: SurvivorRead): void;
}

function SurvivorListItem(props: SurvivorListItemProps): React.ReactElement<SurvivorListItemProps> {
  return (
    <Grid
      templateColumns='repeat(5, 1fr)'
      gap={4}
      padding={5}
      paddingBottom={5}
      borderWidth={2}
    >
      <GridItem>
        <Avatar name={props.survivor.name} />
      </GridItem>

      <GridItem colSpan={2}>
        <p style={{ paddingBottom: 10 }}>
          <strong>{'Name'}:</strong> {props.survivor.name}
        </p>

        <p>
          <strong>{'Gender'}:</strong> {props.survivor.gender}
        </p>
      </GridItem>

      <GridItem>
        <p>
          <strong>{'Age'}:</strong> {props.survivor.age}
        </p>
      </GridItem>

      <GridItem>
        <Center h={'100%'}>
          <Button
            colorScheme={props.buttonConfig.buttonColor}
            leftIcon={props.buttonConfig.buttonIcon}
            onClick={() => props.onSelect(props.survivor)}
          >
            {props.buttonConfig.buttonText}
          </Button>
        </Center>
      </GridItem>
    </Grid>
  );
}

export default SurvivorListItem;
