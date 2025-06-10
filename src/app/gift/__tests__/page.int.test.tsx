import { screen } from '@testing-library/react';
import GiftPage from '../page';
import { getPolaroids } from '@/utils/polaroid-storage';
import { renderPage } from '@/__test-utils__/setup';

jest.mock("@utils/polaroid-storage", () => ({
  getPolaroids: jest.fn()
}));
describe('GiftPage', () => {
  it('should render title correctly', async () => {
    (getPolaroids as jest.Mock).mockResolvedValue([
      {
        imageUrl: "/test.jpg",
        caption: "Teste"
      }
    ]);
    const page = await GiftPage();
    renderPage(page as React.ReactElement);

    const title = screen.getByText(/Minhas Fotos/i);
    expect(title).toBeInTheDocument();
  });

  it('should render polaroid carousel', async () => {
    (getPolaroids as jest.Mock).mockResolvedValue([
      {
        imageUrl: "/test-1.jpg",
        caption: "Teste 1"
      },
      {
        imageUrl: "/test-2.jpg",
        caption: "Teste 2"
      },
      {
        imageUrl: "/test-3.jpg",
        caption: "Teste 3"
      }
    ])
    const page = await GiftPage();
    renderPage(page as React.ReactElement);

    const polaroids = screen.getAllByRole('img');
    expect(polaroids).toHaveLength(3);

    const captions = [
      'Teste 1',
      'Teste 2',
      'Teste 3'
    ];

    captions.forEach(caption => {
      expect(screen.getByText(caption)).toBeInTheDocument();
    });
  });
}); 