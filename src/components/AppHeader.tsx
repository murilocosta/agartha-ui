import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import headerLogo from "../images/logo.png";
import { NavigationItem, ANONYMOUS_USER_MENU_ITEMS } from '../constants/navigationMenu';
import AppHeaderDesktop from './AppHeaderDesktop';
import AppHeaderMobile from './AppHeaderMobile';

export default function AppHeader(): React.ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Image
                align={useBreakpointValue({ base: 'center', md: 'left' })}
                width={120}
                src={headerLogo}
                alt="Agartha"
              />
            </Box>

            <AppHeaderDesktop />
          </HStack>

          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                <Avatar size={'sm'} />
              </MenuButton>

              <MenuList>
              {ANONYMOUS_USER_MENU_ITEMS.map((navItem: NavigationItem) => (
                <MenuItem key={navItem.label} as={'a'} href={navItem.href}>
                  {navItem.label}
                </MenuItem>
              ))}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? <AppHeaderMobile /> : null}
      </Box>
    </>
  );
}