import React, {FunctionComponent} from 'react'
import {BiMessageError} from 'react-icons/bi'

interface propsInt {
  loadMore: () => void;
}

const NoSuchGuy:FunctionComponent<propsInt> = ({loadMore}) => {

  return (
    <div className="error">
      <div className="error--container">
        <BiMessageError className='error--icon'/>
        <h1 className='error--message error--message__xxl'>There is no such guy in this cartoon.</h1>
        <button onClick={() => loadMore()}>Load more characters</button>
      </div>
    </div>
    )
}

export default NoSuchGuy;