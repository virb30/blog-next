import { screen } from "@testing-library/react";
import Logo from "./Logo";
import { setup } from "@/__test-utils__/setup";

describe('Logo tests', () => {
  it('renders logo correctly', () => {
    const { container } = setup(<Logo />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    
    // Verifica se o slash usa a classe correta para logo slash
    const slashPolygon = container.querySelector('polygon.fill-logo-slash');
    expect(slashPolygon).toBeInTheDocument();
    
    // Verifica se as letras usam a classe correta para logo letters
    const lettersPath = container.querySelectorAll('path.fill-logo-letters');
    expect(lettersPath).toHaveLength(10);
    
    // Verifica se os brackets usam as classes corretas
    const upperBracketPolygons = container.querySelectorAll('polygon.fill-logo-upper-bracket');
    expect(upperBracketPolygons).toHaveLength(3);
    
    const lowerBracketPolygons = container.querySelectorAll('polygon.fill-logo-lower-bracket');
    expect(lowerBracketPolygons).toHaveLength(2);
  });

  it('has proper aria attributes', () => {
    setup(<Logo />);
    
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('aria-label', 'logo');
  });
});