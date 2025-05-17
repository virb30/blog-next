import { render as defaultRender, RenderOptions, RenderResult } from "@testing-library/react";
import userEvent, { UserEvent } from '@testing-library/user-event';
import React from "react";
import { SessionProvider } from "@/providers/SessionContext";
import { CookieConsentProvider } from "@/providers/CookieConsentContext";
import { ThemeProvider } from "@/providers/ThemeContext";
import { mockMatchMedia } from "@/__mocks__/window";

export type SetupResult = RenderResult & { user: UserEvent };

export function setup(ui: React.ReactNode, options?: RenderOptions): SetupResult {
  return {
    user: userEvent.setup(),
    ...defaultRender(ui, options)
  }
}

export function renderPage(ui: React.ReactNode, options?: RenderOptions): SetupResult {
  return setup(ui, {
    ...options,
    wrapper: AllProviders
  })
}

export function AllProviders({ children }: { children: React.ReactNode }) {
  mockMatchMedia(false);
  return (
    <SessionProvider>
      <CookieConsentProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </CookieConsentProvider>
    </SessionProvider>
  )
}