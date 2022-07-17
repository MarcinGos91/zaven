import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ContextProvider from './Context.provider'
import Header from '../components/Header.component'

describe('input box tests', () => {

  const placeHolderText = 'Search...'
  const textSample = 'test123'

  beforeEach(() => {
    render(
    <ContextProvider>
      <Header />
    </ContextProvider>
    );
  });

  it('input element should be rendered with the placeholder', () => {
    const inputElement:HTMLInputElement = screen.getByPlaceholderText(placeHolderText);
    expect(inputElement).toBeInTheDocument();
  })

  it('typing text should reflect in the input', () => {
    const inputElement:HTMLInputElement = screen.getByPlaceholderText(placeHolderText);
    fireEvent.change(inputElement, {target: {value: textSample}})
    expect(inputElement.value).toBe(textSample)
  })

})