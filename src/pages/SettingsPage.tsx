import { useNavigate } from 'react-router-dom';
import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Group,
  Header,
  SimpleCell,
  RichCell,
  Avatar,
  Div,
  Button,
  Text,
} from '@vkontakte/vkui';
import {
  Icon24ChevronRight,
  Icon28SettingsOutline,
  Icon28PaymentCardOutline,
  Icon28NewsfeedOutline,
  Icon28Notification,
  Icon28HelpOutline,
} from '@vkontakte/icons';
import { currentUser } from '../mocks/user';

export function SettingsPage() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: <Icon28SettingsOutline />, label: 'Настройки аккаунта' },
    { icon: <Icon28PaymentCardOutline />, label: 'Оплата' },
    { icon: <Icon28NewsfeedOutline />, label: 'Аккредитация прессы' },
    { icon: <Icon28Notification />, label: 'Уведомления' },
    { icon: <Icon28HelpOutline />, label: 'Поддержка' },
  ];

  return (
    <div className="app-screen">
      <Panel id="settings">
        <PanelHeader before={<PanelHeaderBack onClick={() => navigate(-1)} />}>
          Аккаунт
        </PanelHeader>

        <div className="app-content" style={{ paddingBottom: 0 }}>
          <Group>
            <Div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <Avatar size={72} src={currentUser.avatar} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <Text weight="2" style={{ fontSize: 18 }}>{currentUser.name}</Text>
                  <span
                    style={{
                      background: '#0077ff',
                      color: '#fff',
                      fontSize: 11,
                      fontWeight: 600,
                      padding: '2px 8px',
                      borderRadius: 10,
                    }}
                  >
                    {currentUser.badge}
                  </span>
                </div>
                <Button size="s" mode="secondary">
                  Редактировать
                </Button>
              </div>
            </Div>
          </Group>

          <Group>
            {menuItems.map(item => (
              <SimpleCell
                key={item.label}
                before={item.icon}
                after={<Icon24ChevronRight style={{ color: 'var(--vkui--color_text_secondary)' }} />}
                onClick={() => {}}
              >
                {item.label}
              </SimpleCell>
            ))}
          </Group>

          <Group header={<Header>ПРОШЕДШИЕ СОБЫТИЯ</Header>}>
            {currentUser.pastEvents.map(event => (
              <RichCell
                key={event.title}
                before={
                  <Avatar
                    size={48}
                    src={event.thumbnail}
                    style={{ borderRadius: 8 }}
                  />
                }
                subtitle={`${event.date} • ${event.venue}`}
                after={<Icon24ChevronRight style={{ color: 'var(--vkui--color_text_secondary)' }} />}
              >
                {event.title}
              </RichCell>
            ))}
          </Group>
        </div>
      </Panel>
    </div>
  );
}
