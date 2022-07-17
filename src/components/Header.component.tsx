import React, {ChangeEvent, FunctionComponent} from 'react'
import { useGlobalContext } from './../hooks';
import RadioButton from '../elements/RadioButton.element';
import { STATUSES } from '../config/constants'

const Header:FunctionComponent = ({}) => {

  const {filterValue, status, handleSetNewStatus, handleNewFilterValue} = useGlobalContext();                              
  const isChecked = (value: string): boolean => value === status;
  const handleRadioClick = (event: ChangeEvent<HTMLInputElement>): void => handleSetNewStatus(event.target.value)

  return (
      <header className='header'>
        <form className='header--form'>
          <div className='header--buttons'>
            {STATUSES.map((status: string) => <RadioButton name='characterStatus' key={status} value={status} isChecked={isChecked} onChange={handleRadioClick} />)}
          </div>
          <div className='header--container'>
            <input 
            className ='header--input' 
            onChange={(event: ChangeEvent<HTMLInputElement>) => handleNewFilterValue(event.target.value)}
            type='text' value={filterValue} 
            placeholder="Search..."
            />
          </div>
        </form>
      </header>
    )
}

export default Header;