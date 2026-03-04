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
  Text,
  Caption,
  Link,
  Separator,
} from '@vkontakte/vkui';
import { Icon24Share } from '@vkontakte/icons';
import { useApp } from '../context/AppContext';
import { Event } from '../types';

interface RegistrationModalProps {
  event: Event;
  onClose: () => void;
}

export function RegistrationModal({ event, onClose }: RegistrationModalProps) {
  const { registerForEvent } = useApp();
  const [agreed, setAgreed] = useState(false);
  const [name, setName] = useState('Маша Иванова');
  const [email, setEmail] = useState('masha@example.com');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');

  const handleRegister = () => {
    registerForEvent(event.id);
    onClose();
  };

  return (
    <ModalPage
      id="registration"
      onClose={onClose}
      header={
        <ModalPageHeader
          before={<PanelHeaderBack onClick={onClose} />}
          after={<Icon24Share style={{ cursor: 'pointer' }} />}
        >
          Регистрация
        </ModalPageHeader>
      }
    >
      <Div style={{ paddingBottom: 4 }}>
        <Text weight="2">{event.title}</Text>
        <Caption style={{ color: 'var(--vkui--color_text_secondary)', marginTop: 4 }}>
          {event.date} • {event.location}
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
