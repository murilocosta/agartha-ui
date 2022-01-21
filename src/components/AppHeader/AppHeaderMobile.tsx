import React from 'react';
import { NavLink as RouterLink } from "react-router-dom";

import { Box, HStack, Icon, Link, Stack } from '@chakra-ui/react';

import { NavigationItem, NAVIGATION_ITEMS } from '../../constants/navigationItemList';

function AppHeaderMobile(): React.ReactElement {
  return (
    <Box pb={4} display={{ md: 'none' }}>
      <Stack as={'nav'} spacing={4}>
        {NAVIGATION_ITEMS.map((navItem: NavigationItem, index: number) => (
          <RouterLink key={index} to={navItem.href || '#'}>
            {({ isActive }) => (
              <HStack style={isActive ? { color: '#eb9528' } : undefined}>
                <Icon as={navItem.icon} />

                <Link fontSize={'sm'} fontWeight={500} padding={2}>
                  {navItem.label}
                </Link>
              </HStack>
            )}
          </RouterLink>


        ))}
      </Stack>
    </Box>
  );
};

export default AppHeaderMobile;
