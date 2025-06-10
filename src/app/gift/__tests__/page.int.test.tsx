import { screen } from '@testing-library/react';
import GiftPage from '../page';
import { listPolaroids } from '@/utils/polaroid-storage';
import { renderPage } from '@/__test-utils__/setup';
import { verifyToken } from '@/utils/jwt-validator';

jest.mock("@utils/polaroid-storage", () => ({
  listPolaroids: jest.fn()
}));

jest.mock("next/navigation", () => ({
  redirect: jest.fn()
}));

jest.mock('@utils/jwt-validator', () => ({
  verifyToken: jest.fn()
}))
describe('GiftPage', () => {
  it('should render title correctly', async () => {
    (listPolaroids as jest.Mock).mockResolvedValue([
      {
        imageUrl: "/test.jpg",
        caption: "Teste"
      }
    ]);
    (verifyToken as jest.Mock).mockResolvedValue({
      startDate: new Date('2025-01-01T10:00:00')
    });
    const searchParams = Promise.resolve({
      token: 'fake-token'
    });
    const page = await GiftPage({ searchParams });
    renderPage(page as React.ReactElement);

    const title = screen.getByText(/Minhas Fotos/i);
    expect(title).toBeInTheDocument();
  });

  it('should render polaroid carousel', async () => {
    (listPolaroids as jest.Mock).mockResolvedValue([
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
    ]);

    (verifyToken as jest.Mock).mockResolvedValue({
      startDate: new Date('2025-01-01T10:00:00')
    });
    const searchParams = Promise.resolve({
      token: 'fake-token'
    });
    const page = await GiftPage({ searchParams });
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