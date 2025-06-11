import { render, screen, fireEvent } from '@testing-library/react';
import PolaroidFrame from '../index';

describe('PolaroidFrame', () => {
  const mockImageUrl = '/test-image.jpg';
  const mockCaption = 'Test Caption';

  it('should render correctly with image and caption', () => {
    render(<PolaroidFrame imageUrl={mockImageUrl} caption={mockCaption} />);

    const image = screen.getByAltText(mockCaption);
    const caption = screen.getByText(mockCaption);

    expect(image).toBeInTheDocument();
    expect(caption).toBeInTheDocument();
  });

  it('should render without caption when not provided', () => {
    render(<PolaroidFrame imageUrl={mockImageUrl} />);

    const image = screen.getByAltText('Polaroid image');
    expect(image).toBeInTheDocument();
  });

  it('should start with hidden image when revealed is false', () => {
    render(<PolaroidFrame imageUrl={mockImageUrl} />);

    const image = screen.getByAltText('Polaroid image');
    expect(image).toHaveClass('hidden');
    expect(image).not.toHaveClass('revealed');
  });

  it('should start with revealed image when revealed is true', () => {
    render(<PolaroidFrame imageUrl={mockImageUrl} revealed={true} />);

    const image = screen.getByAltText('Polaroid image');
    expect(image).toHaveClass('revealed');
    expect(image).not.toHaveClass('hidden');
  });

  it('should reveal image when clicked when not revealed', () => {
    const onRevealChange = jest.fn();
    render(<PolaroidFrame imageUrl={mockImageUrl} onRevealChange={onRevealChange} />);

    const polaroid = screen.getByRole('img').parentElement?.parentElement;
    fireEvent.click(polaroid!);

    const image = screen.getByAltText('Polaroid image');
    expect(image).toHaveClass('revealed');
    expect(onRevealChange).toHaveBeenCalledWith(true);
  });

  it('should hide image when clicked when revealed', () => {
    const onRevealChange = jest.fn();
    render(<PolaroidFrame imageUrl={mockImageUrl} revealed={true} onRevealChange={onRevealChange} />);

    const polaroid = screen.getByRole('img').parentElement?.parentElement;
    fireEvent.click(polaroid!);

    const image = screen.getByAltText('Polaroid image');
    expect(image).toHaveClass('hidden');
    expect(onRevealChange).toHaveBeenCalledWith(false);
  });
}); 