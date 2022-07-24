import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'reduxjs-toolkit-persist';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';
import { store } from './redux/store';
import { routesList } from './data/routesList';
import './index.css';

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Routes>
          {routesList.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </PersistGate>
  </Provider>
);
