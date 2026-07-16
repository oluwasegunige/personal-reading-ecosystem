import type { ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppShell } from './components/AppShell.js';
import { PlaceholderPage } from './components/PlaceholderPage.js';
import './desktop.css';
export const DesktopApp = (): ReactElement => (
  <AppShell>
    <Routes>
      <Route path="/home" element={<PlaceholderPage title="Home" />} />
      <Route path="/library" element={<PlaceholderPage title="All Books" />} />
      <Route path="/authors" element={<PlaceholderPage title="Authors" />} />
      <Route path="/series" element={<PlaceholderPage title="Series" />} />
      <Route path="/collections" element={<PlaceholderPage title="Collections" />} />
      <Route path="/tags" element={<PlaceholderPage title="Tags" />} />
      <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  </AppShell>
);
