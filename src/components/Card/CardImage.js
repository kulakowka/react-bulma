import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Image from '../Image/Image'

const CardImage = ({
  alt,
  is,
  square,
  src,
  className,
  ...props
}) => {
  const classes = classNames('card-image', className)

  return (
    <div className={classes} {...props}>
      <Image square={square} is={is} src={src} alt={alt} />
    </div>
  )
}

CardImage.displayName = 'Card.Image'

CardImage.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
  square: PropTypes.oneOf([
    '1by1',
    '4by3',
    '3by2',
    '16by9',
    '2by1'
  ]),
  is: PropTypes.oneOf([
    '16x16',
    '24x24',
    '32x32',
    '48x48',
    '64x64',
    '96x96',
    '128x128'
  ]),
  src: PropTypes.string.isRequired
}

export default CardImage
