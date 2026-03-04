import { createContext, useContext, useState, ReactNode } from 'react';
import { currentUser } from '../mocks/user';

interface AppState {
  isAuthenticated: boolean;
  registeredEventIds: string[];
}

interface AppContextType extends AppState {
  login: () => void;
  registerForEvent: (eventId: string) => void;
  unregisterFromEvent: (eventId: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>({
    isAuthenticated: false,
    registeredEventIds: [...currentUser.registeredEventIds],
  });

  const login = () => setState(s => ({ ...s, isAuthenticated: true }));

  const registerForEvent = (eventId: string) =>
    setState(s => ({
      ...s,
      registeredEventIds: s.registeredEventIds.includes(eventId)
        ? s.registeredEventIds
        : [...s.registeredEventIds, eventId],
    }));

  const unregisterFromEvent = (eventId: string) =>
    setState(s => ({
      ...s,
      registeredEventIds: s.registeredEventIds.filter(id => id !== eventId),
    }));

  return (
    <AppContext.Provider value={{ ...state, login, registerForEvent, unregisterFromEvent }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
