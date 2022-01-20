import React from 'react';
import { getIn, ArrayHelpers, FieldArray, FormikProps, FormikValues } from 'formik';

import { ItemRead } from '../models/item';
import { useGetItemsQuery } from '../services';
import SurvivorRegistrationInventoryFallback from './SurvivorRegistrationInventoryFallback';
import SurvivorRegistrationInventoryListItem from './SurvivorRegistrationInventoryListItem';

export interface InventoryListProps extends FormikProps<FormikValues> {
  nameFilter?: string;
}

function SurvivorRegistrationInventoryList(props: InventoryListProps): React.ReactElement<InventoryListProps> {
  const { data, isLoading } = useGetItemsQuery(null);

  const itemFilter = ({ name }: ItemRead): boolean => {
    return name.toLowerCase().includes((props.nameFilter || '').toLowerCase());
  }

  if (isLoading) {
    return <SurvivorRegistrationInventoryFallback />;
  }

  return (
    <FieldArray
      name='survivor.inventory'
      render={(arrayHelpers: ArrayHelpers) => (
        data !== undefined && data.length > 0 ? (
          data.filter(itemFilter).map((item: ItemRead) => (
            <SurvivorRegistrationInventoryListItem
              key={item.id}
              item={item}
              quantity={getIn(props.values, `survivor.inventory.${item.id}.quantity`) || 0}
              {...arrayHelpers}
            />
          ))
        ) : <></>
      )}
    />
  );
}

export default SurvivorRegistrationInventoryList;
