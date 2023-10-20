import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { LoadScript } from '@react-google-maps/api';
import App from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <LoadScript
    googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
    libraries={['places']}
    language="uk"
  >
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </LoadScript>
  // </React.StrictMode>
);
