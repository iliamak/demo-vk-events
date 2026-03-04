export interface Event {
  id: string;
  title: string;
  date: string;
  fullDate: string;
  location: string;
  venue: string;
  category: 'music' | 'tech' | 'sport' | 'business';
  coverImage: string;
  thumbnailImage: string;
  description: string;
  organizer: {
    name: string;
    role: string;
    avatar: string;
  };
  attendees: {
    avatars: string[];
    extraCount: number;
  };
  isFeatured: boolean;
}

export interface User {
  name: string;
  avatar: string;
  badge: string;
  registeredEventIds: string[];
  pastEvents: PastEvent[];
}

export interface PastEvent {
  title: string;
  date: string;
  venue: string;
  thumbnail: string;
}
