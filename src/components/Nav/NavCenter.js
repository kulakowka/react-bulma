import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const NavCenter = ({
  menu,
  className,
  ...props
}) => {
  const classes = classNames('nav-center', {
    'nav-menu': menu
  }, className)

  return <div className={classes} {...props} />
}

NavCenter.displayName = 'Nav.Center'

NavCenter.propTypes = {
  menu: PropTypes.bool,
  className: PropTypes.string
}

export default NavCenter
