import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ChakraProvider } from '@chakra-ui/react';

import AppHeader from './AppHeader';
import AppMessages from './AppMessages';
import AppNavigation from './AppNavigation';

function App(): React.ReactElement<any, any> {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <BrowserRouter>
          <AppHeader />
          <AppMessages />
          <AppNavigation />
        </BrowserRouter>
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default App;
