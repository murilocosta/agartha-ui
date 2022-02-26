import React from 'react';

import { Center, Icon, Td, Tr } from '@chakra-ui/react';

import { getItemIcon } from '../../constants/itemIconList';
import { ItemRead } from '../../models/item';

export interface ResourceTableRowProps {
  item: ItemRead;
  formatReportRowValue(item: ItemRead): any
}

function DashboardResourceTableRow(props: ResourceTableRowProps): React.ReactElement<ResourceTableRowProps> {
  return (
    <Tr>
      <Td w={'10%'}>
        <Center h={'100%'}>
          <Icon as={getItemIcon(props.item.icon)} w={6} h={6} />
        </Center>
      </Td>

      <Td style={{ textAlign: 'left' }}>
        {props.item.name}
      </Td>

      <Td w={'30%'} style={{ textAlign: 'right' }}>
        {props.formatReportRowValue(props.item)}
      </Td>
    </Tr>
  );
}

export default DashboardResourceTableRow;
