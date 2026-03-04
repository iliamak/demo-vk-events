import { useState } from 'react';
import { ModalRoot, AppRoot, ConfigProvider, AdaptivityProvider } from '@vkontakte/vkui';
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
                <span className="landing__logo-icon">VK</span>
                <span className="landing__logo-text">Events</span>
              </div>
              <nav className="landing__nav">
                <a href="#" className="landing__nav-link">Афиша</a>
                <a
                  href="#"
                  className="landing__nav-link"
                  onClick={e => { e.preventDefault(); setAuthOpen(true); }}
                >
                  Войти
                </a>
              </nav>
            </header>

            <main className="landing__hero">
              <div className="landing__hero-bg" />
              <div className="landing__hero-content">
                <h1 className="landing__title">
                  VK Events —{' '}
                  <span className="landing__title-accent">идеальное место встречи</span>
                </h1>
                <p className="landing__subtitle">
                  Открывайте лучшие события, регистрируйтесь и встречайтесь с людьми, которые разделяют ваши интересы
                </p>
                <button
                  className="landing__cta"
                  onClick={() => setAuthOpen(true)}
                >
                  Продолжить
                </button>
              </div>
            </main>

            <section className="landing__features">
              <div className="landing__feature">
                <div className="landing__feature-icon">🎵</div>
                <h3>Музыка</h3>
                <p>Концерты и фестивали</p>
              </div>
              <div className="landing__feature">
                <div className="landing__feature-icon">💡</div>
                <h3>Технологии</h3>
                <p>Митапы и конференции</p>
              </div>
              <div className="landing__feature">
                <div className="landing__feature-icon">🏃</div>
                <h3>Спорт</h3>
                <p>Забеги и турниры</p>
              </div>
            </section>
          </div>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}
