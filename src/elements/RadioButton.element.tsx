import React, {FunctionComponent, ChangeEvent} from 'react'

interface propsInt {
  isChecked: (value:string) => boolean,
  value: string, 
  name: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const RadioButton:FunctionComponent<propsInt> = ({isChecked, value, onChange, name}) => {

  return (
    <label className='global--radio'>
      <input 
        type='radio' 
        value={value}
        name='characterStatus' 
        checked={isChecked(value)} 
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event)} />
        <span className='global--radioText'>{value}</span>
    </label>
    )
}

export default RadioButton;