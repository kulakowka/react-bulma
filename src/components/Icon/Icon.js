import React from 'react'
import PropTypes from 'prop-types'

/*
Bulma is compatible with Font Awesome icons.
*/
const Icon = ({
  small,
  medium,
  large,
  ...props
}) => {
  let className = 'icon'
  if (small) className += ` is-small`
  if (medium) className += ` is-medium`
  if (large) className += ` is-large`

  return <span className={className} {...props} />
}

Icon.displayName = 'Icon'

Icon.propTypes = {
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool
}

export default Icon
