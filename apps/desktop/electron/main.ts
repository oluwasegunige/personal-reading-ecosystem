import { app, BrowserWindow } from 'electron';
const createWindow = (): void => {
  const window = new BrowserWindow({ width: 1280, height: 800, show: false });
  window.once('ready-to-show', () => window.show());
  void window.loadURL(process.env.DESKTOP_RENDERER_URL ?? 'http://127.0.0.1:5173');
};
app.whenReady().then(createWindow);
