import React, { PropsWithChildren } from 'react';

import { Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react';

export interface ResourceTableProps extends PropsWithChildren<any> {
  header: string;
  reportColumnName: string;
}

function DashboardResourceTable(props: ResourceTableProps): React.ReactElement<ResourceTableProps> {
  return (
    <Table variant='simple'>
      <Thead>
        <Tr>
          <Th colSpan={3}>{props.header}</Th>
        </Tr>

        <Tr>
          <Th></Th>
          <Th>{'Resource'}</Th>
          <Th>{props.reportColumnName}</Th>
        </Tr>
      </Thead>

      <Tbody>
        {props.children}
      </Tbody>
    </Table>
  );
}

export default DashboardResourceTable;
