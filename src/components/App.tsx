import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux'

import { ChakraProvider } from '@chakra-ui/react';

import store from '../features/store';
import AppHeader from './AppHeader/AppHeader';
import AppNavigation from './AppNavigation';

function App(): React.ReactElement {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider>
        <HashRouter>
          <AppHeader />
          <AppNavigation />
        </HashRouter>
      </ChakraProvider>
    </ReduxProvider>
  );
}

export default App;
