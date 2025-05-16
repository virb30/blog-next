import { setup } from "@/__test-utils__/setup";
import { screen } from "@testing-library/react";
import Spinner from "./Spinner";


describe('Spinner tests', () => {
  it('renders spinner', () => {
    setup(<Spinner />);

    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
  });
});