import React from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";

import AppSection from "../AppSection";

function TradeManagementPage(): React.ReactElement {
  return (
    <AppSection pageHeader={'Trade - Management'}>
      <Tabs orientation={'vertical'} colorScheme={'orange'} variant={'soft-rounded'} isLazy>
        <TabList>
          <RouterLink to='/trades/select-survivor'>
            <Button marginBottom={3} leftIcon={<MdAdd />} bgColor={'orange.300'}>
              {'New Trade'}
            </Button>
          </RouterLink>

          <Tab>{'Trade History'}</Tab>
          <Tab>{'Inbound'}</Tab>
          <Tab>{'Outbound'}</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>{'@TODO TRADE HISTORY'}</p>
          </TabPanel>

          <TabPanel>
            <p>{'@TODO INBOUND'}</p>
          </TabPanel>

          <TabPanel>
            <p>{'@TODO OUTBOUND'}</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </AppSection >
  );
}

export default TradeManagementPage;
