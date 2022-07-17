import React, {ChangeEvent} from 'react';
import { render, screen } from '@testing-library/react';
import Radio from '../elements/RadioButton.element';

const sampleValue = 'test123'
const sampleName = 'dasdsadas'
const sampleIsCheckedTrue = (value: string) => true
const sampleIsCheckedFalse = (value: string) => false
const sampleOnChange = (event: ChangeEvent<HTMLInputElement>) => { return }


describe('radio button tests for checked', () => {

  beforeEach(() => {
    render(<Radio 
      value={sampleValue} 
      name={sampleName} 
      isChecked={sampleIsCheckedTrue} 
      onChange={sampleOnChange}
      />);
  })

  it('should render correct value', () => {
    const radioButton:HTMLInputElement = screen.getByText(sampleValue);
    expect(radioButton).toBeInTheDocument();
  });

  it('the radio button should be checked', () => {
    const radioButton:HTMLInputElement = screen.getByLabelText(sampleValue);
    expect(radioButton).toBeChecked();
  });

})

describe('radio button test for unchecked', () => {
  beforeEach(() => {
    render(<Radio 
      value={sampleValue} 
      name={sampleName} 
      isChecked={sampleIsCheckedFalse} 
      onChange={sampleOnChange}
      />);
  })

  it('the radio button should not be checked', () => {
    const radioButton:HTMLInputElement = screen.getByLabelText(sampleValue);
    expect(radioButton).not.toBeChecked();
  })
})


