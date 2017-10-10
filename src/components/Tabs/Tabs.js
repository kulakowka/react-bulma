import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

/*
Simple responsive horizontal navigation tabs, with different styles
*/
const Tabs = ({
  boxed,
  right,
  small,
  medium,
  large,
  fullwidth,
  centered,
  toggle,
  className,
  ...props
}) => {
  const classes = classNames('tabs', {
    'is-boxed': boxed,
    'is-right': right,
    'is-small': small,
    'is-medium': medium,
    'is-large': large,
    'is-fullwidth': fullwidth,
    'is-centered': centered,
    'is-toggle': toggle
  }, className)

  return <div className={classes} {...props} />
}

Tabs.displayName = 'Tabs'

Tabs.propTypes = {
  className: PropTypes.string,
  right: PropTypes.bool,
  centered: PropTypes.bool,
  boxed: PropTypes.bool,
  fullwidth: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  toggle: PropTypes.bool
}

export default Tabs
