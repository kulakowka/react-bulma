import React from 'react'
import PropTypes from 'prop-types'
import 'bulma/css/bulma.css'

/*
A container for responsive images
*/
const Image = ({
  is,
  src,
  alt,
  square
}) => {
  let className = 'image'
  if (is) className += ` is-${is}`
  if (square) className += ` is-${square}`

  return (
    <figure className={className}>
      <img src={src} alt={alt} />
    </figure>
  )
}

Image.displayName = 'Image'

Image.propTypes = {
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
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export default Image
