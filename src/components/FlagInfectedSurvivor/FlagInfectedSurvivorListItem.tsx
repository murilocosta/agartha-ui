import React from 'react';
import { MdFlag } from 'react-icons/md';
import { FormikProps, FormikValues } from 'formik';

import { Avatar, Button, Center, Grid, GridItem } from '@chakra-ui/react';

import { SurvivorRead } from '../../models/survivor';

export interface SurvivorListItemProps {
  survivor: SurvivorRead;
  onSelect(reported_id: number): void;
}

function FlagInfectedSurvivorListItem(props: SurvivorListItemProps): React.ReactElement<SurvivorListItemProps> {
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
            colorScheme={'red'}
            leftIcon={<MdFlag />}
            onClick={() => props.onSelect(props.survivor.id)}
          >
            {'Report'}
          </Button>
        </Center>
      </GridItem>
    </Grid>
  );
}

export default FlagInfectedSurvivorListItem;
