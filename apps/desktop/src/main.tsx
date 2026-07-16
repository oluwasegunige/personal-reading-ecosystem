import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@reading/design-system/tokens.css';
import { DesktopApp } from './presentation/DesktopApp.js';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <DesktopApp />
    </BrowserRouter>
  </StrictMode>,
);
