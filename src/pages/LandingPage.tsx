import { useState } from 'react';
import { ModalRoot, AppRoot, ConfigProvider, AdaptivityProvider } from '@vkontakte/vkui';
import { Icon28LogoVk } from '@vkontakte/icons';
import { AuthModal } from '../components/AuthModal';
import '../styles/landing.css';

export function LandingPage() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <ConfigProvider colorScheme="dark">
      <AdaptivityProvider>
        <AppRoot>
          <ModalRoot
            activeModal={authOpen ? 'auth' : null}
            onClose={() => setAuthOpen(false)}
          >
            <AuthModal onClose={() => setAuthOpen(false)} />
          </ModalRoot>

          <div className="landing">
            <header className="landing__header">
              <div className="landing__logo">
                <Icon28LogoVk width={24} height={24} />
                <span className="landing__logo-text">Events</span>
              </div>
              <button
                className="landing__login-btn"
                onClick={() => setAuthOpen(true)}
              >
                Войти
              </button>
            </header>

            <div className="landing__collage">
              <img
                className="landing__poster landing__poster--1"
                src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80"
                alt="Concert"
              />
              <img
                className="landing__poster landing__poster--2"
                src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&q=80"
                alt="Art exhibition"
              />
              <img
                className="landing__poster landing__poster--3"
                src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=80"
                alt="Festival"
              />
            </div>

            <div className="landing__text-block">
              <h1 className="landing__title">
                VK Events —{'\n'}идеальное{'\n'}место встречи
              </h1>
            </div>

            <div className="landing__cta-wrap">
              <button
                className="landing__cta"
                onClick={() => setAuthOpen(true)}
              >
                Продолжить
              </button>
            </div>
          </div>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}
