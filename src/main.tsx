import '@/styles/global.css'
import App from './App';
import { createRoot } from 'react-dom/client';
import { StrictMode, useEffect } from 'react';
import { store } from '@/store'
import { Provider } from 'react-redux'

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode> 
  );
}
