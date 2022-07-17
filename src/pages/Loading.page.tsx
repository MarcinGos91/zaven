import React, {FunctionComponent} from 'react'
import { TailSpin } from  'react-loader-spinner'

interface propsInt {

}

const Loading:FunctionComponent<propsInt> = ({}) => {

  return (
      <div className='loading'>
        <TailSpin color="#7fd1ec" height={100} width={100}/>
        <div>Loading, please wait.</div>
      </div>
    )
}

export default Loading;