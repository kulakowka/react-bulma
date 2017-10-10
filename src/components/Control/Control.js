import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Control = ({
  as: Div,
  hasIconsLeft,
  hasIconsRight,
  small,
  medium,
  large,
  loading,
  className,
  ...props
}) => {
  const classes = classNames('control', {
    'has-icons-left': hasIconsLeft,
    'has-icons-right': hasIconsRight,
    'is-small': small,
    'is-medium': medium,
    'is-large': large,
    'is-loading': loading
  }, className)

  return <Div className={classes} {...props} />
}

Control.displayName = 'Control'

Control.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
  hasIconsLeft: PropTypes.bool,
  hasIconsRight: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  loading: PropTypes.bool
}

Control.defaultProps = {
  as: 'div'
}

export default Control
