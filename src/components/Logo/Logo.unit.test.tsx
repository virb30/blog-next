import { ThemeContext } from "@/providers/ThemeContext";
import { screen } from "@testing-library/react";
import Logo, { logoTheme } from "./Logo";
import { setup } from "@/__test-utils__/setup";

describe('Logo tests', () => {
  it('renders logo with light theme', () => {

    const toggleTheme = (): void => { };
    const theme = "light";

    const { container } = setup(
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Logo />
      </ThemeContext.Provider>
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    const slashPolygon = container.querySelector(`polygon[fill="${logoTheme.light.slash}"]`)
    expect(slashPolygon).toBeInTheDocument();
    const lettersPolygon = container.querySelectorAll(`path[fill="${logoTheme.light.letters}"]`);
    expect(lettersPolygon).toHaveLength(10);
  });

  it('renders logo with dark theme', () => {

    const toggleTheme = (): void => { };
    const theme = "dark";

    const { container } = setup(
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Logo />
      </ThemeContext.Provider>
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    const slashPolygon = container.querySelector(`polygon[fill="${logoTheme.dark.slash}"]`)
    expect(slashPolygon).toBeInTheDocument();
    const lettersPolygon = container.querySelectorAll(`path[fill="${logoTheme.dark.letters}"]`);
    expect(lettersPolygon).toHaveLength(10);
  });
});