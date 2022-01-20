import React from 'react';
import { Link as RouterLink } from "react-router-dom";

import { Box, HStack, Icon, Link, Stack } from '@chakra-ui/react';

import { NavigationItem, NAVIGATION_ITEMS } from '../constants/navigationMenu';

function AppHeaderMobile(): React.ReactElement {
  return (
    <Box pb={4} display={{ md: 'none' }}>
      <Stack as={'nav'} spacing={4}>
        {NAVIGATION_ITEMS.map((navItem: NavigationItem, index: number) => (
          <HStack key={index}>
            <Icon as={navItem.icon} />

            <Link
              as={RouterLink}
              to={navItem.href || '#'}
              fontSize={'sm'}
              fontWeight={500}
              p={2}
            >
              {navItem.label}
            </Link>
          </HStack>
        ))}
      </Stack>
    </Box>
  );
};

export default AppHeaderMobile;
