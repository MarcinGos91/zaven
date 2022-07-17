import { render, screen, } from '@testing-library/react';
import ContextProvider from './Context.provider'
import App from '../App';
import { STATUSES } from '../config/constants';

const intersectionObserverMock = () => ({
  observe: () => null
})
window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

describe('App test', () => {

  const placeHolderText = 'Search...'

  beforeEach(() => {
   render(
    <ContextProvider>
      <App />
    </ContextProvider>
    );
  });

  it('input element should be rendered', () => {
    const inputElement:HTMLInputElement = screen.getByPlaceholderText(placeHolderText);
    expect(inputElement).toBeInTheDocument();
  })

  it('all statuses should be available', () => {
    STATUSES.forEach((singleStatus: string) => {
      const inputElement:HTMLInputElement = screen.getByText(singleStatus);
      expect(inputElement).toBeInTheDocument();
    })
  })
})