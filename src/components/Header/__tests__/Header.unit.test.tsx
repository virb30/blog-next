import { setup } from "@/__test-utils__/setup";
import { ThemeContext } from "@/providers/ThemeContext";
import Header from "../Header";
import { screen } from "@testing-library/react";

describe("Header Unit tests", () => {
  const theme = "dark";
  const toggleTheme = jest.fn();
  it("renders header", () => {
    setup(
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Header />
      </ThemeContext.Provider>
    );

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sobre/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /theme switcher/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument();
  });

  it("navigates between pages", () => {
    setup(
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Header />
      </ThemeContext.Provider>
    );
  });
});