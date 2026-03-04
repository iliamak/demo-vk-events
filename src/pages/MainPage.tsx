import { useNavigate } from 'react-router-dom';
import {
  Panel,
  PanelHeader,
  Group,
  Header,
  Avatar,
  Div,
  IconButton,
} from '@vkontakte/vkui';
import { Icon28Notification } from '@vkontakte/icons';
import { BottomNav } from '../components/BottomNav';
import { EventCard } from '../components/EventCard';
import { useApp } from '../context/AppContext';
import { events } from '../mocks/events';
import { currentUser } from '../mocks/user';

export function MainPage() {
  const navigate = useNavigate();
  const { registeredEventIds } = useApp();

  const registeredEvents = events.filter(e => registeredEventIds.includes(e.id));

  return (
    <div className="app-screen">
      <Panel id="main">
        <PanelHeader
          before={null}
          after={
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <IconButton>
                <Icon28Notification />
              </IconButton>
              <Avatar
                size={36}
                src={currentUser.avatar}
                onClick={() => navigate('/settings')}
                style={{ cursor: 'pointer' }}
              />
            </div>
          }
        >
          VK События
        </PanelHeader>

        <div className="app-content">
          <Group
            header={
              <Header indicator={registeredEvents.length}>
                ВАШИ СОБЫТИЯ
              </Header>
            }
          >
            {registeredEvents.length === 0 ? (
              <Div style={{ textAlign: 'center', color: 'var(--vkui--color_text_secondary)' }}>
                У вас пока нет зарегистрированных событий
              </Div>
            ) : (
              registeredEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))
            )}
          </Group>
        </div>

        <BottomNav />
      </Panel>
    </div>
  );
}
