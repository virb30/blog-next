import { screen } from "@testing-library/react";
import { setup } from "@/__test-utils__/setup";
import MaintenancePage from "./MaintenancePage";

describe("MaintenancePage Unit tests", () => {
  it("renders maintenance message and site branding", () => {
    setup(<MaintenancePage />);

    expect(screen.getByRole("img", { name: /logo/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /página em manutenção/i })).toBeInTheDocument();
    expect(screen.getByText(/atualização em andamento/i)).toBeInTheDocument();
    expect(screen.getByText(/o site está temporariamente indisponível/i)).toBeInTheDocument();
  });
});
