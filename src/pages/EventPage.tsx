import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Group,
  Div,
  Title,
  Text,
  Button,
  SimpleCell,
  Avatar,
  UsersStack,
  ModalRoot,
  Snackbar,
  IconButton,
  Separator,
} from '@vkontakte/vkui';
import {
  Icon24Share,
  Icon28CalendarOutline,
  Icon28More,
  Icon24LocationMapOutline,
  Icon24ChevronRight,
} from '@vkontakte/icons';
import { useApp } from '../context/AppContext';
import { events } from '../mocks/events';
import { RegistrationModal } from '../components/RegistrationModal';
import { QRCodeModal } from '../components/QRCodeModal';
import { MoreActionSheet } from '../components/MoreActionSheet';

type Modal = 'registration' | 'qr' | null;

export function EventPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { registeredEventIds, unregisterFromEvent } = useApp();

  const [activeModal, setActiveModal] = useState<Modal>(null);
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [snackbar, setSnackbar] = useState<string | null>(null);

  const event = events.find(e => e.id === id);

  if (!event) {
    return (
      <div className="app-screen">
        <Panel id="event-not-found">
          <PanelHeader before={<PanelHeaderBack onClick={() => navigate(-1)} />}>
            Событие
          </PanelHeader>
          <Div>Событие не найдено</Div>
        </Panel>
      </div>
    );
  }

  const isRegistered = registeredEventIds.includes(event.id);

  const handleUnregister = () => {
    unregisterFromEvent(event.id);
    setSnackbar('Регистрация отменена');
  };

  const handleAddToCalendar = () => {
    setSnackbar('Добавлено в календарь');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: event.title, url: window.location.href }).catch(() => {});
    } else {
      setSnackbar('Ссылка скопирована');
    }
  };

  return (
    <div className="app-screen">
      <ModalRoot
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
      >
        <RegistrationModal event={event} onClose={() => setActiveModal(null)} />
        <QRCodeModal event={event} onClose={() => setActiveModal(null)} />
      </ModalRoot>

      {showActionSheet && (
        <MoreActionSheet
          onClose={() => setShowActionSheet(false)}
          onUnregister={handleUnregister}
          onAddToCalendar={handleAddToCalendar}
        />
      )}

      {snackbar && (
        <Snackbar onClose={() => setSnackbar(null)}>
          {snackbar}
        </Snackbar>
      )}

      <Panel id="event">
        <PanelHeader
          before={<PanelHeaderBack onClick={() => navigate(-1)} />}
          after={
            <IconButton onClick={handleShare}>
              <Icon24Share />
            </IconButton>
          }
        >
          Событие
        </PanelHeader>

        <div className="app-content">
          <img
            src={event.coverImage}
            alt={event.title}
            style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }}
          />

          <Group>
            <Div>
              {isRegistered && (
                <div style={{ marginBottom: 8 }}>
                  <span
                    style={{
                      background: '#4bb34b',
                      color: '#fff',
                      fontSize: 13,
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: 20,
                    }}
                  >
                    Вы идёте
                  </span>
                </div>
              )}

              <Title level="1" style={{ marginBottom: 8 }}>
                {event.title}
              </Title>

              <Text style={{ color: 'var(--vkui--color_text_secondary)', marginBottom: 16 }}>
                📅 {event.fullDate}
              </Text>

              <div style={{ display: 'flex', gap: 8 }}>
                {isRegistered ? (
                  <Button
                    size="l"
                    before={<Icon28CalendarOutline />}
                    onClick={() => setActiveModal('qr')}
                    style={{ flex: 1 }}
                  >
                    Мой билет
                  </Button>
                ) : (
                  <Button
                    size="l"
                    before={<Icon28CalendarOutline />}
                    onClick={() => setActiveModal('registration')}
                    style={{ flex: 1 }}
                  >
                    Регистрация
                  </Button>
                )}
                <Button
                  size="l"
                  mode="secondary"
                  onClick={() => {
                    if (isRegistered) setShowActionSheet(true);
                  }}
                  style={{ width: 48, padding: 0 }}
                >
                  <Icon28More />
                </Button>
              </div>
            </Div>
          </Group>

          <Group header={
            <div style={{ padding: '8px 16px 4px', fontSize: 13, fontWeight: 600, color: 'var(--vkui--color_text_secondary)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
              МЕСТО ПРОВЕДЕНИЯ
            </div>
          }>
            <Div style={{ padding: '0 16px 8px' }}>
              <img
                src="https://placehold.co/400x150/e8e8e8/999999?text=Карта"
                alt="Карта"
                style={{ width: '100%', borderRadius: 12, marginBottom: 8 }}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Icon24LocationMapOutline style={{ color: 'var(--vkui--color_text_secondary)', flexShrink: 0 }} />
                <Text>{event.venue}</Text>
              </div>
            </Div>
          </Group>

          <Group header={
            <div style={{ padding: '8px 16px 4px', fontSize: 13, fontWeight: 600, color: 'var(--vkui--color_text_secondary)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
              ОРГАНИЗАТОР
            </div>
          }>
            <SimpleCell
              before={<Avatar size={40} src={event.organizer.avatar} />}
              after={<Icon24ChevronRight style={{ color: 'var(--vkui--color_text_secondary)' }} />}
              subtitle={event.organizer.role}
            >
              {event.organizer.name}
            </SimpleCell>
          </Group>

          <Group header={
            <div style={{ padding: '8px 16px 4px', fontSize: 13, fontWeight: 600, color: 'var(--vkui--color_text_secondary)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
              КТО ПОЙДЁТ
            </div>
          }>
            <Div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <UsersStack
                  photos={event.attendees.avatars}
                  size="s"
                />
                <Text style={{ color: 'var(--vkui--color_text_secondary)' }}>
                  и ещё {event.attendees.extraCount.toLocaleString('ru')} человек
                </Text>
              </div>
            </Div>
          </Group>

          <Group header={
            <div style={{ padding: '8px 16px 4px', fontSize: 13, fontWeight: 600, color: 'var(--vkui--color_text_secondary)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
              ОПИСАНИЕ
            </div>
          }>
            <Div>
              <Text style={{ whiteSpace: 'pre-line', lineHeight: 1.6 }}>
                {event.description}
              </Text>
            </Div>
          </Group>

          <Separator />
        </div>
      </Panel>
    </div>
  );
}
