import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

/*
Bulma is compatible with Font Awesome icons.
*/
const Icon = ({
  as: Span,
  large,
  left,
  medium,
  right,
  small,
  className,
  ...props
}) => {
  const classes = classNames('icon', {
    'is-small': small,
    'is-medium': medium,
    'is-large': large,
    'is-left': left,
    'is-right': right
  }, className)

  return <Span className={classes} {...props} />
}

Icon.displayName = 'Icon'

Icon.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
  large: PropTypes.bool,
  left: PropTypes.bool,
  medium: PropTypes.bool,
  right: PropTypes.bool,
  small: PropTypes.bool
}

Icon.defaultProps = {
  as: 'span'
}

export default Icon
