import React from 'react';
import { HashRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ChakraProvider } from '@chakra-ui/react';

import AppHeader from './AppHeader';
import AppMessages from './AppMessages';
import AppNavigation from './AppNavigation';

function App(): React.ReactElement {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <HashRouter>
          <AppHeader />
          <AppMessages />
          <AppNavigation />
        </HashRouter>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default App;
