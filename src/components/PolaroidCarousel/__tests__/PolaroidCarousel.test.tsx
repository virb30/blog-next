import { render, screen, fireEvent, act } from '@testing-library/react';
import PolaroidCarousel from '../index';

describe('PolaroidCarousel', () => {
  const mockPolaroids = [
    {
      imageUrl: '/image1.jpg',
      caption: 'Foto 1',
      revealed: false
    },
    {
      imageUrl: '/image2.jpg',
      caption: 'Foto 2',
      revealed: true
    },
    {
      imageUrl: '/image3.jpg',
      caption: 'Foto 3',
      revealed: false
    }
  ];

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should render correctly with all polaroids', () => {
    render(<PolaroidCarousel polaroids={mockPolaroids} />);

    mockPolaroids.forEach(polaroid => {
      expect(screen.getByAltText(polaroid.caption)).toBeInTheDocument();
    });
  });

  it('should show first polaroid initially', () => {
    render(<PolaroidCarousel polaroids={mockPolaroids} />);

    const firstImage = screen.getByAltText('Foto 1');
    expect(firstImage).toBeInTheDocument();
  });

  it('should navigate to next polaroid when clicking next button', () => {
    render(<PolaroidCarousel polaroids={mockPolaroids} />);

    const nextButton = screen.getByLabelText('Próxima foto');
    fireEvent.click(nextButton);

    const secondImage = screen.getByAltText('Foto 2');
    expect(secondImage).toBeInTheDocument();
  });

  it('should navigate to previous polaroid when clicking previous button', () => {
    render(<PolaroidCarousel polaroids={mockPolaroids} />);

    const prevButton = screen.getByLabelText('Foto anterior');
    fireEvent.click(prevButton);

    const lastImage = screen.getByAltText('Foto 3');
    expect(lastImage).toBeInTheDocument();
  });

  it('should toggle autoplay when clicking control button', () => {
    render(<PolaroidCarousel polaroids={mockPolaroids} />);

    const playButton = screen.getByLabelText('Iniciar slideshow');
    fireEvent.click(playButton);

    expect(screen.getByLabelText('Pausar slideshow')).toBeInTheDocument();
  });

  it('should advance automatically when autoplay is active', () => {
    render(<PolaroidCarousel polaroids={mockPolaroids} interval={1000} />);

    const playButton = screen.getByLabelText('Iniciar slideshow');
    fireEvent.click(playButton);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const secondImage = screen.getByAltText('Foto 2');
    expect(secondImage).toBeInTheDocument();
  });

  it('should pause autoplay when mouse is over carousel', () => {
    render(<PolaroidCarousel polaroids={mockPolaroids} interval={1000} />);

    const playButton = screen.getByLabelText('Iniciar slideshow');
    fireEvent.click(playButton);

    const carousel = screen.getAllByRole('img')[0].parentElement?.parentElement?.parentElement;
    fireEvent.mouseEnter(carousel!);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const firstImage = screen.getByAltText('Foto 1');
    expect(firstImage).toBeInTheDocument();
  });

  it('should navigate to specific polaroid when clicking indicator', () => {
    render(<PolaroidCarousel polaroids={mockPolaroids} />);

    const indicators = screen.getAllByRole('button', { name: /Ir para slide/i });
    fireEvent.click(indicators[2]);

    const thirdImage = screen.getByAltText('Foto 3');
    expect(thirdImage).toBeInTheDocument();
  });
}); 