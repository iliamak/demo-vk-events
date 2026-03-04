import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ModalPage,
  ModalPageHeader,
  FormItem,
  Input,
  Button,
  Checkbox,
  Separator,
  Div,
  Title,
  Text,
  Link,
} from '@vkontakte/vkui';
import { Icon36LogoVk } from '@vkontakte/icons';
import { useApp } from '../context/AppContext';

interface AuthModalProps {
  onClose: () => void;
}

export function AuthModal({ onClose }: AuthModalProps) {
  const navigate = useNavigate();
  const { login } = useApp();
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleAuth = () => {
    login();
    onClose();
    navigate('/main');
  };

  return (
    <ModalPage
      id="auth"
      onClose={onClose}
      header={<ModalPageHeader>Вход</ModalPageHeader>}
    >
      <Div style={{ textAlign: 'center', paddingTop: 8 }}>
        <Icon36LogoVk width={48} height={48} style={{ color: '#0077FF' }} />
        <Title level="2" style={{ marginTop: 12, marginBottom: 8 }}>
          Добро пожаловать!
        </Title>
        <Text style={{ color: 'var(--vkui--color_text_secondary)' }}>
          Пожалуйста, авторизуйтесь через удобный вам сервис.
        </Text>
      </Div>

      <FormItem top="Почта">
        <Input
          placeholder="Введите почту"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </FormItem>

      <Div>
        <Link style={{ fontSize: 14 }}>Использовать телефон</Link>
      </Div>

      <FormItem>
        <Button size="l" stretched onClick={handleAuth}>
          Продолжить с почтой
        </Button>
      </FormItem>

      <Separator padding />
      <Div style={{ textAlign: 'center', color: 'var(--vkui--color_text_secondary)', fontSize: 13 }}>
        или
      </Div>
      <Separator padding />

      <FormItem>
        <Button
          size="l"
          stretched
          mode="primary"
          before={<Icon36LogoVk width={24} height={24} />}
          onClick={handleAuth}
          style={{ backgroundColor: '#0077FF' }}
        >
          Войти через VK ID
        </Button>
      </FormItem>

      <FormItem>
        <Checkbox
          defaultChecked={agreed}
          onChange={e => setAgreed(e.target.checked)}
        >
          Я согласен с правилами и условиями
        </Checkbox>
      </FormItem>
    </ModalPage>
  );
}
