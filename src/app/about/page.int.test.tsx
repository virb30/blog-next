import { screen } from "@testing-library/react";
import { renderPage } from "@/__test-utils__/setup";
import AboutPage from './page';

describe("AboutPage tests", () => {
  it("renders about page", () => {
    renderPage(<AboutPage />);

    expect(screen.getByRole('complementary', { name: /profile\-info/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /avatar/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /sobre mim/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /tecnologias/i })).toBeInTheDocument();
  });
})