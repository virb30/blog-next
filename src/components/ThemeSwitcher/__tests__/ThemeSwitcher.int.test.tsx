import { setup } from "@/__test-utils__/setup";
import { ThemeProvider } from "@/providers/ThemeContext";
import ThemeSwitcher from "../ThemeSwitcher";
import { screen } from "@testing-library/react";
import { mockMatchMedia } from "@/__mocks__/window";
describe("ThemeSwitcher Unit tests", () => {

  beforeEach(() => {
    localStorage.clear();
  });
  it('toggles theme on click', async () => {
    mockMatchMedia(false);

    const { user } = setup(
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    );

    const toggleThemeButton = screen.getByRole('button', { name: /theme switcher/i });
    expect(localStorage.getItem('theme')).toEqual('light');

    await user.click(toggleThemeButton);

    expect(localStorage.getItem('theme')).toEqual('dark');
  });
});