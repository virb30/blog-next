import { setup } from "@/__test-utils__/setup";
import { screen } from "@testing-library/react";
import NavLink from "../NavLink";
import { usePathname } from "next/navigation";

jest.mock('next/navigation', () => ({
  usePathname: jest.fn()
}));

const mockedUsePathname = usePathname as jest.Mock;


describe("NavLink Unit tests", () => {

  it("renders link with active state", () => {
    mockedUsePathname.mockReturnValue('/');
    setup(
      <NavLink href="/">
        Home
      </NavLink>
    );

    const link = screen.getByRole('link', { name: /home/i });
    expect(link).toBeInTheDocument();
    expect(link.className).toEqual(expect.stringContaining('active-link'));
    expect(link).toHaveAttribute('aria-current', 'page');
  });

  it("renders link with active state for subpath", () => {
    mockedUsePathname.mockReturnValue('/blog/test');
    setup(
      <NavLink href="/blog">
        Blog
      </NavLink>
    );

    const link = screen.getByRole('link', { name: /blog/i });
    expect(link).toBeInTheDocument();
    expect(link.className).toEqual(expect.stringContaining('active-link'));
    expect(link).toHaveAttribute('aria-current', 'page');
  });

  it("renders link without active state", () => {
    mockedUsePathname.mockReturnValue('/');
    setup(
      <NavLink href="/home">
        Home
      </NavLink>
    );

    const link = screen.getByRole('link', { name: /home/i });
    expect(link).toBeInTheDocument();
    expect(link).not.toHaveAttribute('aria-current');
  });
});