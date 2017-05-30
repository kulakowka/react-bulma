import React from 'react'
import PropTypes from 'prop-types'

const CardImage = ({
  alt,
  is,
  src
}) => {
  let className = 'image'
  if (is) className += ` is-${is}`

  return (
    <div className='card-image'>
      <figure className={className}>
        <img src={src} alt={alt} />
      </figure>
    </div>
  )
}

CardImage.displayName = 'Card.Image'

CardImage.propTypes = {
  alt: PropTypes.string,
  is: PropTypes.oneOf(['4by3']),
  src: PropTypes.string.isRequired
}

export default CardImage
