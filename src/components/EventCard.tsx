import { useNavigate } from 'react-router-dom';
import { RichCell, Avatar } from '@vkontakte/vkui';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const navigate = useNavigate();

  return (
    <RichCell
      before={
        <Avatar
          size={72}
          src={event.thumbnailImage}
          style={{ borderRadius: 12 }}
        />
      }
      subtitle={`${event.date} • ${event.location}`}
      onClick={() => navigate(`/event/${event.id}`)}
      style={{ cursor: 'pointer' }}
    >
      {event.title}
    </RichCell>
  );
}
