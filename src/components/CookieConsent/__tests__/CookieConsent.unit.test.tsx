import { setup } from "@/__tests__/test-utils";
import { screen } from "@testing-library/react";
import { CookieConsentContext } from "@/providers/CookieConsentContext";
import CookieConsent from "../CookieConsent";

describe("CookieConsent Tests", () => {
  it('shows cookie consent accept dialog when not accepted', () => {

    const acceptCookiesPolicy = jest.fn();
    setup(
      <CookieConsentContext.Provider value={{ acceptCookiesPolicy, cookiesPolicyAccepted: false }}>
        <CookieConsent />
      </CookieConsentContext.Provider>
    );

    expect(screen.getByTestId("consent-term-container")).toBeInTheDocument();
  });

  it('doesnt show cookie consent accept dialog when already accepted', () => {

    const acceptCookiesPolicy = jest.fn();
    setup(
      <CookieConsentContext.Provider value={{ acceptCookiesPolicy, cookiesPolicyAccepted: true }}>
        <CookieConsent />
      </CookieConsentContext.Provider>
    );

    expect(screen.queryByTestId("consent-term-container")).not.toBeInTheDocument();
  });

  it('accepts cookie consent terms', async () => {
    const acceptCookiesPolicy = jest.fn();

    const { user } = setup(
      <CookieConsentContext.Provider value={{ acceptCookiesPolicy, cookiesPolicyAccepted: false }}>
        <CookieConsent />
      </CookieConsentContext.Provider>
    );

    expect(screen.getByTestId("consent-term-container")).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /aceitar/i }));

    expect(acceptCookiesPolicy).toHaveBeenCalled();
  });
});