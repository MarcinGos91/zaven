import React, {FunctionComponent} from 'react'
import {BiMessageError} from 'react-icons/bi'

interface propsInt {

}

const Error:FunctionComponent<propsInt> = ({}) => {

  return (
    <div className="error">
      <div className="error--container">
        <BiMessageError className='error--icon'/>
        <h1 className='error--message error--message__xxl'>Something went wrong.</h1>
      </div>
    </div>
    )
}

export default Error;