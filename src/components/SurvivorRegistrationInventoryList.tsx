import React from 'react';
import { useRecoilValue } from 'recoil';

import SurvivorRegistrationInventoryListItem from './SurvivorRegistrationInventoryListItem';
import { itemListSelector } from '../selectors/items';
import { ItemRead } from '../models/item';

function SurvivorRegistrationInventoryList(): React.ReactElement {
  const itemList: ItemRead[] = useRecoilValue(itemListSelector);

  return (
    <>
      {itemList.map(item =>
        <SurvivorRegistrationInventoryListItem key={item.id} item={item} />
      )}
    </>
  );
}

export default SurvivorRegistrationInventoryList;
