import { setup } from "@/__test-utils__/setup";
import { ThemeContext } from "@/providers/ThemeContext";
import ThemeSwitcher from "../ThemeSwitcher";
import { screen } from "@testing-library/react";

describe("ThemeSwitcher Unit tests", () => {
  it('renders theme switcher for dark mode', () => {
    const toggleTheme = jest.fn();

    const { container } = setup(
      <ThemeContext.Provider value={{ theme: "dark", toggleTheme }}>
        <ThemeSwitcher />
      </ThemeContext.Provider>
    );

    expect(screen.getByRole('button', { name: /theme switcher/i })).toBeInTheDocument();
    const icon = container.querySelector('svg');
    expect(icon).toHaveAttribute('data-prefix', 'far');
  });

  it('renders theme switcher for light mode', () => {
    const toggleTheme = jest.fn();

    const { container } = setup(
      <ThemeContext.Provider value={{ theme: "light", toggleTheme }}>
        <ThemeSwitcher />
      </ThemeContext.Provider>
    );

    expect(screen.getByRole('button', { name: /theme switcher/i })).toBeInTheDocument();
    const icon = container.querySelector('svg');
    expect(icon).toHaveAttribute('data-prefix', 'fas');
  });

  it('renders theme switcher for light mode', async () => {
    const toggleTheme = jest.fn();

    const { user } = setup(
      <ThemeContext.Provider value={{ theme: "light", toggleTheme }}>
        <ThemeSwitcher />
      </ThemeContext.Provider>
    );

    const button = screen.getByRole('button', { name: /theme switcher/i });

    await user.click(button);

    expect(toggleTheme).toHaveBeenCalled();
  });
});