import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import { AppProvider } from './context/AppContext';
import { LandingPage } from './pages/LandingPage';
import { MainPage } from './pages/MainPage';
import { PosterPage } from './pages/PosterPage';
import { EventPage } from './pages/EventPage';
import { SettingsPage } from './pages/SettingsPage';
import '@vkontakte/vkui/dist/vkui.css';
import './styles/app.css';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/main"
        element={
          <ConfigProvider colorScheme="light">
            <AdaptivityProvider>
              <AppRoot>
                <MainPage />
              </AppRoot>
            </AdaptivityProvider>
          </ConfigProvider>
        }
      />
      <Route
        path="/poster"
        element={
          <ConfigProvider colorScheme="light">
            <AdaptivityProvider>
              <AppRoot>
                <PosterPage />
              </AppRoot>
            </AdaptivityProvider>
          </ConfigProvider>
        }
      />
      <Route
        path="/event/:id"
        element={
          <ConfigProvider colorScheme="light">
            <AdaptivityProvider>
              <AppRoot>
                <EventPage />
              </AppRoot>
            </AdaptivityProvider>
          </ConfigProvider>
        }
      />
      <Route
        path="/settings"
        element={
          <ConfigProvider colorScheme="light">
            <AdaptivityProvider>
              <AppRoot>
                <SettingsPage />
              </AppRoot>
            </AdaptivityProvider>
          </ConfigProvider>
        }
      />
    </Routes>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="phone-wrapper">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}
