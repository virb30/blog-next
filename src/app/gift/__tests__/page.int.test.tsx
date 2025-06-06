import { render, screen } from '@testing-library/react';
import GiftPage from '../page';

describe('GiftPage', () => {
  it('should render title correctly', () => {
    render(<GiftPage />);

    const title = screen.getByText('Meus Momentos Especiais');
    expect(title).toBeInTheDocument();
  });

  it('should render polaroid carousel', () => {
    render(<GiftPage />);

    const polaroids = screen.getAllByRole('img');
    expect(polaroids).toHaveLength(3);

    const captions = [
      'Um momento especial',
      'Outro momento incrível',
      'Mais uma lembrança'
    ];

    captions.forEach(caption => {
      expect(screen.getByText(caption)).toBeInTheDocument();
    });
  });
}); 