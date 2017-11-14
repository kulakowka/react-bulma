import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const NavLeft = ({
  menu,
  className,
  ...props
}) => {
  const classes = classNames('navbar-start', {
    'nav-menu': menu
  }, className)

  return <div className={classes} {...props} />
}

NavLeft.displayName = 'Nav.Left'

NavLeft.propTypes = {
  menu: PropTypes.bool,
  className: PropTypes.string
}

export default NavLeft
