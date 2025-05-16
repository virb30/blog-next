import { setup } from "@/__test-utils__/setup";
import { screen } from "@testing-library/react";
import NavBar from "../NavBar";

describe("NavBar Unit tests", () => {
  it("renders nav bar with links", () => {
    const links = [
      {
        href: "/",
        label: "Home"
      },
      {
        href: "/about",
        label: "Sobre"
      }
    ];

    setup(
      <NavBar links={links} />
    );

    links.forEach((link) => {
      const linkElement = screen.getByRole('link', { name: new RegExp(link.label, "i") });
      expect(linkElement).toHaveAttribute('href', link.href);
    });
  });
});