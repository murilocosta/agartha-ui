import React from 'react';

import { HStack, Spacer, Text } from '@chakra-ui/react';

import { useAppSelector } from '../../features/hooks';
import { MAX_PRICE_ALLOWED, selectCurrentPrice } from '../../features/registration/registrationSlice';

function SurvivorRegistrationInventoryMaxPrice(): React.ReactElement {
  const currentPrice = useAppSelector(selectCurrentPrice);

  return (
    <HStack>
      <Text fontSize='lg'>
        {'Available '}
        <span style={{ fontSize: 32 }}>
          {MAX_PRICE_ALLOWED}
        </span>
      </Text>

      <Spacer />

      <Text fontSize='lg'>
        {'Used '}
        <span style={{
          fontSize: 32,
          color: currentPrice > MAX_PRICE_ALLOWED ? 'red' : 'green'
        }}>
          {currentPrice}
        </span>
      </Text>
    </HStack>
  );
}

export default SurvivorRegistrationInventoryMaxPrice;