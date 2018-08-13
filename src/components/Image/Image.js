import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

/*
A container for responsive images
*/
const Image = ({
  is,
  src,
  alt,
  square,
  ratio,
  className,
  ...props
}) => {
  const classes = classNames(
    'image',
    {
      [`is-${is}`]: is,
      [`is-square`]: square,
      [`is-${ratio}`]: ratio
    },
    className
  )

  return (
    <figure className={classes} {...props}>
      <img src={src} alt={alt} />
    </figure>
  )
}

Image.displayName = 'Image'

Image.propTypes = {
  className: PropTypes.string,
  square: PropTypes.bool,
  ratio: PropTypes.oneOf([
    '1by1',
    '5by4',
    '4by3',
    '3by2',
    '5by3',
    '16by9',
    '2by1',
    '3by1',
    '4by5',
    '3by4',
    '2by3',
    '3by5',
    '9by16',
    '1by2',
    '1by3'
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
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export default Image
