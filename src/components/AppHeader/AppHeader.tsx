import React from 'react';

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import headerLogo from "../images/logo.png";

import AppHeaderDesktop from './AppHeaderDesktop';
import AppHeaderMobile from './AppHeaderMobile';
import AppHeaderProfile from './AppHeaderProfile';

function AppHeader(): React.ReactElement {
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
                alt={'Agartha'}
              />
            </Box>

            <AppHeaderDesktop />
          </HStack>

          <Flex alignItems={'center'}>
            <AppHeaderProfile />
          </Flex>
        </Flex>

        {isOpen ? <AppHeaderMobile /> : null}
      </Box>
    </>
  );
}

export default AppHeader;
