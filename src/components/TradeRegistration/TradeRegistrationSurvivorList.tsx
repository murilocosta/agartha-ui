import React, { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Box, Flex, useBreakpointValue, VStack } from '@chakra-ui/react';
import { MdCheckCircleOutline } from 'react-icons/md';

import { useAppDispatch, useAppSelector } from '../../features/hooks';
import { selectProfile } from '../../features/survivor/survivorSlice';
import { setSelectedSurvivor } from '../../features/trade/tradeSlice';
import { SurvivorRead } from '../../models/survivor';
import { useFetchSurvivorListQuery } from '../../services';

import SurvivorList from '../SurvivorList/SurvivorList';
import SurvivorListFallback from '../SurvivorList/SurvivorListFallback';
import SurvivorNameFilter from '../SurvivorList/SurvivorNameFilter';

function TradeRegistrationSurvivorList(): React.ReactElement {
  const selectSurvivorBoxWidth = useBreakpointValue({ base: '100%', md: '70%', lg: '60%' });
  const [nameFilter, setNameFilter] = React.useState('');
  const { data, isLoading, isFetching } = useFetchSurvivorListQuery({ name: nameFilter });

  const profileSurvivor = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const onSelectSurvivor = useCallback(({ id }: SurvivorRead) => {
    dispatch(setSelectedSurvivor({
      senderId: profileSurvivor?.id,
      receiverId: id
    }));

    navigate('/trades/select-items', { state: { from: location } })
  }, [
    dispatch,
    profileSurvivor?.id,
    navigate,
    location
  ]);

  return (
    <>
      <Flex direction={{ base: 'column' }} alignItems={'center'} gridGap={5}>
        <Box w={selectSurvivorBoxWidth}>
          <SurvivorNameFilter onSelectFilter={setNameFilter} />
        </Box>

        <Box w={selectSurvivorBoxWidth} marginBottom={4}>
          {isLoading || isFetching ? (
            <SurvivorListFallback />
          ) : (
            <VStack spacing={4}>
              <SurvivorList
                buttonConfig={{
                  buttonIcon: <MdCheckCircleOutline />,
                  buttonColor: 'orange',
                  buttonText: 'Select',
                }}
                survivorList={data}
                onSelectSurvivor={onSelectSurvivor}
              />
            </VStack>
          )}

        </Box>
      </Flex>
    </>
  );
}

export default TradeRegistrationSurvivorList;
