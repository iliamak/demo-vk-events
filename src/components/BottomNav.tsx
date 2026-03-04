import { useNavigate, useLocation } from 'react-router-dom';
import { Tabbar, TabbarItem } from '@vkontakte/vkui';
import { Icon28HomeOutline, Icon28TicketOutline } from '@vkontakte/icons';

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Tabbar>
      <TabbarItem
        selected={location.pathname === '/main'}
        label="Главная"
        onClick={() => navigate('/main')}
      >
        <Icon28HomeOutline />
      </TabbarItem>
      <TabbarItem
        selected={location.pathname === '/poster'}
        label="Афиша"
        onClick={() => navigate('/poster')}
      >
        <Icon28TicketOutline />
      </TabbarItem>
    </Tabbar>
  );
}
