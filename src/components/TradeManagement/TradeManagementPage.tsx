import React from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useBreakpointValue
} from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";

import { useAppSelector } from '../../features/hooks';
import { selectProfile } from '../../features/survivor/survivorSlice';
import { useFetchTradeHistoryQuery } from "../../services";

import AppSection from "../AppSection";
import TradeManagementTabHistory from "./TradeManagementTabHistory";
import TradeManagementTabInbound from "./TradeManagementTabInbound";
import TradeManagementTabOutbound from "./TradeManagementTabOutbound";

type TabListOrientation = 'vertical' | 'horizontal';

function TradeManagementPage(): React.ReactElement {
  const profile = useAppSelector(selectProfile);
  const { data, isLoading } = useFetchTradeHistoryQuery(profile?.id || 0);
  const dynamicTabListOrientation = useBreakpointValue<TabListOrientation>({ base: 'horizontal', md: 'vertical' });

  return (
    <AppSection pageHeader={'Trade - Management'}>
      <RouterLink to='/trades/select-survivor'>
        <Button bgColor={'orange.300'} leftIcon={<MdAdd />} marginBottom={3}>
          {'New Trade'}
        </Button>
      </RouterLink>

      <Tabs orientation={dynamicTabListOrientation} colorScheme={'orange'} variant={'soft-rounded'} isLazy>
        <TabList>
          <Tab w={130}>{'Trade History'}</Tab>
          <Tab>{'Inbound'}</Tab>
          <Tab>{'Outbound'}</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <TradeManagementTabHistory isLoading={isLoading} resourceList={data} />
          </TabPanel>

          <TabPanel>
            <TradeManagementTabInbound isLoading={isLoading} resourceList={data} />
          </TabPanel>

          <TabPanel>
            <TradeManagementTabOutbound isLoading={isLoading} resourceList={data} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </AppSection >
  );
}

export default TradeManagementPage;
