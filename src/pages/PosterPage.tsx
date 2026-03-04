import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Panel,
  PanelHeader,
  Group,
  Header,
  HorizontalScroll,
  Avatar,
  Div,
  Button,
} from '@vkontakte/vkui';
import { BottomNav } from '../components/BottomNav';
import { EventCard } from '../components/EventCard';
import { EventFeaturedCard } from '../components/EventFeaturedCard';
import { events } from '../mocks/events';
import { currentUser } from '../mocks/user';
import { Event } from '../types';

type Category = 'all' | 'music' | 'tech' | 'sport' | 'business';

const categories: { key: Category; label: string }[] = [
  { key: 'all', label: 'Все' },
  { key: 'music', label: 'Музыка' },
  { key: 'tech', label: 'Технологии' },
  { key: 'sport', label: 'Спорт' },
  { key: 'business', label: 'Бизнес' },
];

export function PosterPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredEvents: Event[] =
    activeCategory === 'all'
      ? events
      : events.filter(e => e.category === activeCategory);

  const featuredEvents = filteredEvents.filter(e => e.isFeatured);
  const regularEvents = filteredEvents.filter(e => !e.isFeatured);

  return (
    <div className="app-screen">
      <Panel id="poster">
        <PanelHeader
          after={
            <Avatar
              size={36}
              src={currentUser.avatar}
              onClick={() => navigate('/settings')}
              style={{ cursor: 'pointer' }}
            />
          }
        >
          Афиша
        </PanelHeader>

        <div className="app-content">
          <Div style={{ paddingBottom: 0 }}>
            <HorizontalScroll>
              <div style={{ display: 'flex', gap: 8, paddingBottom: 4 }}>
                {categories.map(cat => (
                  <Button
                    key={cat.key}
                    mode={activeCategory === cat.key ? 'primary' : 'outline'}
                    size="s"
                    onClick={() => setActiveCategory(cat.key)}
                    style={{ flexShrink: 0 }}
                  >
                    {cat.label}
                  </Button>
                ))}
              </div>
            </HorizontalScroll>
          </Div>

          {featuredEvents.length > 0 && (
            <Group header={<Header>ГЛАВНЫЕ СОБЫТИЯ</Header>}>
              <HorizontalScroll>
                <div style={{ display: 'flex' }}>
                  {featuredEvents.map(event => (
                    <EventFeaturedCard key={event.id} event={event} />
                  ))}
                </div>
              </HorizontalScroll>
            </Group>
          )}

          {regularEvents.length > 0 && (
            <Group header={<Header>ВАМ МОГУТ ПОНРАВИТЬСЯ</Header>}>
              {regularEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </Group>
          )}

          {filteredEvents.length === 0 && (
            <Div style={{ textAlign: 'center', color: 'var(--vkui--color_text_secondary)', paddingTop: 40 }}>
              Событий в этой категории нет
            </Div>
          )}
        </div>

        <BottomNav />
      </Panel>
    </div>
  );
}
