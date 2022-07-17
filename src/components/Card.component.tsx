import React, {FunctionComponent} from 'react'

interface propsInt {
  img: string,
  name: string,
  status: string
}

const Card:FunctionComponent<propsInt> = ({img, name, status}) => {

  return (
      <div className='card'>
        <img className='card--image' src={img} alt={`${name} character image`} />
        <div className='card--details'>
          <span className='card--name card--name__l'>{name}</span>
          <span className='card--status card--status__m'>Status: {status}</span>
        </div>
      </div>
    )
}

export default Card;