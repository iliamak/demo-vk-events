import { useState } from 'react';
import {
  ModalPage,
  ModalPageHeader,
  PanelHeaderBack,
  FormItem,
  Input,
  Button,
  Checkbox,
  Div,
  Title,
  Caption,
  Link,
  Separator,
} from '@vkontakte/vkui';
import { Icon24Share } from '@vkontakte/icons';
import { useApp } from '../context/AppContext';
import { Event } from '../types';

interface RegistrationModalProps {
  event: Event;
  open: boolean;
  onClose: () => void;
}

export function RegistrationModal({ event, open, onClose }: RegistrationModalProps) {
  const { registerForEvent } = useApp();
  const [agreed, setAgreed] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');

  const handleRegister = () => {
    registerForEvent(event.id);
    onClose();
  };

  return (
    <ModalPage
      id="registration"
      open={open}
      onClose={() => onClose()}
      header={
        <ModalPageHeader
          before={<PanelHeaderBack onClick={onClose} />}
          after={<Icon24Share style={{ cursor: 'pointer' }} />}
        >
          Регистрация
        </ModalPageHeader>
      }
    >
      <Div style={{ textAlign: 'center', padding: '16px 16px 4px' }}>
        <Title level="2">{event.title}</Title>
        <Caption style={{ color: 'var(--vkui--color_text_secondary)', marginTop: 4 }}>
          {event.fullDate}, {event.venue}
        </Caption>
      </Div>

      <Separator />

      <FormItem top="Имя">
        <Input
          placeholder="Введите ваше полное имя"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </FormItem>

      <FormItem top="Электронная почта">
        <Input
          placeholder="you@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </FormItem>

      <FormItem top="Компания">
        <Input
          placeholder="Название компании"
          value={company}
          onChange={e => setCompany(e.target.value)}
        />
      </FormItem>

      <FormItem top="Должность">
        <Input
          placeholder="Ваша роль"
          value={role}
          onChange={e => setRole(e.target.value)}
        />
      </FormItem>

      <FormItem>
        <Checkbox
          defaultChecked={agreed}
          onChange={e => setAgreed(e.target.checked)}
        >
          Я согласен с правилами и условиями
        </Checkbox>
      </FormItem>

      <FormItem>
        <Button size="l" stretched onClick={handleRegister}>
          Зарегистрироваться
        </Button>
      </FormItem>

      <Div style={{ textAlign: 'center', paddingBottom: 16 }}>
        <Caption style={{ color: 'var(--vkui--color_text_secondary)' }}>
          <Link>О сервисе</Link>
          {' · '}
          <Link>Поддержка</Link>
          {' · '}
          <Link>Контакты</Link>
        </Caption>
        <Caption style={{ color: 'var(--vkui--color_text_secondary)', marginTop: 4 }}>
          © 2026 VK
        </Caption>
      </Div>
    </ModalPage>
  );
}
