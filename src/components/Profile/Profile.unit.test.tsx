import { setup, SetupResult } from "@/__tests__/test-utils";
import Profile from "./Profile";
import { SessionContext } from "@/providers/SessionContext";
import { screen } from "@testing-library/react";
import { sendGTMEvent } from "@next/third-parties/google";

jest.mock("@next/third-parties/google", () => ({
  sendGTMEvent: jest.fn()
}));

describe("Profile Unit tests", () => {
  let sut: SetupResult;

  beforeEach(() => {
    jest.clearAllMocks();
    sut = setup(
      <SessionContext.Provider value={{ sessionId: "test-session" }}>
        <Profile />
      </SessionContext.Provider>
    );
  });

  it("renders profile component", () => {
    expect(screen.getByRole("img", { name: /avatar/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin profile/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github profile/i })).toBeInTheDocument();
  });

  it('renders links with correct attributes', () => {
    const githubLink = screen.getByRole('link', { name: /github profile/i });
    expect(githubLink).toHaveAttribute('href', expect.stringContaining('https://www.github.com'));

    const linkedinLink = screen.getByRole('link', { name: /linkedin profile/i });
    expect(linkedinLink).toHaveAttribute('href', expect.stringContaining("https://www.linkedin.com/in/"))
  });

  it.skip('sends event to analytics on navigating', async () => {
    const { user } = sut;

    const githubLink = screen.getByRole('link', { name: /github profile/i });
    const linkedinLink = screen.getByRole('link', { name: /linkedin profile/i });

    await user.click(githubLink);
    expect(sendGTMEvent).toHaveBeenCalledWith({
      event: 'contact',
      value: {
        type: "github",
        sessionId: "test-session"
      }
    });

    await user.click(linkedinLink);
    expect(sendGTMEvent).toHaveBeenCalledWith({
      event: 'contact',
      value: {
        type: "linkedin",
        sessionId: "test-session"
      }
    });
  });
});