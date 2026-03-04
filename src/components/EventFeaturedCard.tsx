import { useNavigate } from 'react-router-dom';
import { HorizontalCell, Image } from '@vkontakte/vkui';
import { Event } from '../types';

interface EventFeaturedCardProps {
  event: Event;
}

export function EventFeaturedCard({ event }: EventFeaturedCardProps) {
  const navigate = useNavigate();

  return (
    <HorizontalCell
      size="l"
      title={event.title}
      subtitle={event.date}
      onClick={() => navigate(`/event/${event.id}`)}
      style={{ cursor: 'pointer' }}
    >
      <Image
        src={event.coverImage}
        size={128}
        borderRadius="l"
        style={{ width: 200, height: 120, objectFit: 'cover' }}
      />
    </HorizontalCell>
  );
}
