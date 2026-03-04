import { User } from '../types';

export const currentUser: User = {
  name: 'Маша Иванова',
  avatar: 'https://i.pravatar.cc/100?img=47',
  badge: 'Пресса',
  registeredEventIds: ['meetup-ml', 'festival-stars', 'startup-pitch'],
  pastEvents: [
    {
      title: 'VK Fest 2024',
      date: '20 июля',
      venue: 'Парк 300-летия',
      thumbnail: 'https://placehold.co/80x60/1a1a2e/ffffff?text=2024',
    },
    {
      title: 'Дизайн-митап',
      date: '12 августа',
      venue: 'Loft Hall',
      thumbnail: 'https://placehold.co/80x60/2d1b69/e040fb?text=Design',
    },
    {
      title: 'Тех-митап',
      date: '28 августа',
      venue: 'Space Hub',
      thumbnail: 'https://placehold.co/80x60/0d2137/4fc3f7?text=Tech',
    },
  ],
};
