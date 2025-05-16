import { render as defaultRender, RenderOptions, RenderResult } from "@testing-library/react";
import userEvent, { UserEvent } from '@testing-library/user-event';
import React from "react";

export type SetupResult = RenderResult & { user: UserEvent };

export function setup(ui: React.ReactNode, options?: RenderOptions): SetupResult {
  return {
    user: userEvent.setup(),
    ...defaultRender(ui, options)
  }
}