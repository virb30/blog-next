'use client';

import { createContext, useState, useEffect, useContext } from 'react';

type CookieConsentContextType = {
  cookiesPolicyAccepted: boolean;
  acceptCookiesPolicy: () => void;
};

export const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [cookiesPolicyAccepted, setCookiesPolicyAccepted] = useState(false);

  useEffect(() => {
    const savedCookiesPolicyAccepted = !!localStorage.getItem('cookie-policy-accepted') || false;
    setCookiesPolicyAccepted(savedCookiesPolicyAccepted);
  }, []);

  const acceptCookiesPolicy = () => {
    const accepted = true;
    setCookiesPolicyAccepted(accepted);
    localStorage.setItem('cookie-policy-accepted', JSON.stringify(accepted));
  };

  return (
    <CookieConsentContext.Provider value={{ cookiesPolicyAccepted, acceptCookiesPolicy }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used inside a CookieConsentProvider');
  }
  return context;
}