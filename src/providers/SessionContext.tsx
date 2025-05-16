'use client';

import { createContext, useState, useEffect, useContext } from 'react';

type SessionContextType = {
  sessionId: string | null;
};

export const SessionContext = createContext<SessionContextType | undefined>(undefined);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    const savedSessionId = sessionStorage.getItem('session-id') || null;
    setSessionId(savedSessionId);
    if (!savedSessionId) {
      const n = Math.floor(Math.random() * 1000)
      const sessionId = `SB-${new Date().getTime()}-${n}`
      sessionStorage.setItem('session-id', sessionId);
      setSessionId(sessionId);
    }
  }, []);

  return (
    <SessionContext.Provider value={{ sessionId }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSession must be used inside a SessionProvider');
  }
  return context;
}