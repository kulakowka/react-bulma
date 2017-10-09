import React from 'react'
import PropTypes from 'prop-types'

/*
Bulma is compatible with Font Awesome icons.
*/
const Icon = ({
  large,
  left,
  medium,
  right,
  small,
  ...props
}) => {
  let className = 'icon'
  if (small) className += ` is-small`
  if (medium) className += ` is-medium`
  if (large) className += ` is-large`
  if (left) className += ` is-left`
  if (right) className += ` is-right`

  return <span className={className} {...props} />
}

Icon.displayName = 'Icon'

Icon.propTypes = {
  large: PropTypes.bool,
  left: PropTypes.bool,
  medium: PropTypes.bool,
  right: PropTypes.bool,
  small: PropTypes.bool
}

export default Icon
