import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import {Provider} from 'react-redux';
import {store} from '../src/store';
import {theme} from 'theme/mui';
import {ThemeProvider} from '@mui/material';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App/>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
);

