import { setup } from "@/__tests__/test-utils";
import { screen } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination tests", () => {
  it("renders pagination on first page", async () => {
    const onChange = jest.fn();
    const { container } = setup(<Pagination currentPage={1} totalPages={1} next={null} prev={null} onChange={onChange} />);

    const prevPageButton = screen.getByRole('button', { name: /Página Anterior/i });
    const currentPageButton = screen.getByRole('button', { name: /1/i });
    const nextPageButton = screen.getByRole('button', { name: /Próxima página/i });

    expect(container.querySelectorAll('button')).toHaveLength(3);
    expect(prevPageButton).toBeInTheDocument();
    expect(currentPageButton).toBeInTheDocument();
    expect(nextPageButton).toBeInTheDocument();

    expect(prevPageButton).toBeDisabled();
    expect(currentPageButton).toBeDisabled();
    expect(nextPageButton).toBeDisabled();
  });

  it("navigates between pages", async () => {
    const onChange = jest.fn();
    const { user } = setup(<Pagination currentPage={2} totalPages={4} next={3} prev={1} onChange={onChange} />);

    const prevPageButton = screen.getByRole('button', { name: /Página Anterior/i });
    const page4Button = screen.getByRole('button', { name: /4/i });
    const nextPageButton = screen.getByRole('button', { name: /Próxima página/i });

    await user.click(prevPageButton);
    expect(onChange).toHaveBeenCalledWith(1);

    await user.click(nextPageButton);
    expect(onChange).toHaveBeenCalledWith(3);

    await user.click(page4Button);
    expect(onChange).toHaveBeenCalledWith(4);
  });

  it("doesnt navigate to active or inexistent pages", async () => {
    const onChange = jest.fn();
    const { user } = setup(<Pagination currentPage={1} totalPages={1} next={null} prev={null} onChange={onChange} />);

    const prevPageButton = screen.getByRole('button', { name: /Página Anterior/i });
    const currentPageButton = screen.getByRole('button', { name: /1/i });
    const nextPageButton = screen.getByRole('button', { name: /Próxima página/i });

    await user.click(prevPageButton);
    expect(onChange).not.toHaveBeenCalled();

    await user.click(nextPageButton);
    expect(onChange).not.toHaveBeenCalled();

    await user.click(currentPageButton);
    expect(onChange).not.toHaveBeenCalled();
  });
});