import { setup } from "@/__tests__/test-utils";
import { CookieConsentProvider } from "@/providers/CookieConsentContext";
import CookieConsent from "../CookieConsent";
import { screen } from "@testing-library/react";

describe("CookieConsent Integration Tests", () => {
  it("accepts cookie consent terms", async () => {
    const { user } = setup(
      <CookieConsentProvider>
        <CookieConsent />
      </CookieConsentProvider>
    );

    expect(screen.getByTestId("consent-term-container")).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /aceitar/i }));

    expect(screen.queryByTestId("consent-term-container")).not.toBeInTheDocument();
  })
});