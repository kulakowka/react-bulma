import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const NavRight = ({
  menu,
  className,
  ...props
}) => {
  const classes = classNames('nav-right', {
    'nav-menu': menu
  }, className)

  return <div className={classes} {...props} />
}

NavRight.displayName = 'Nav.Right'

NavRight.propTypes = {
  menu: PropTypes.bool,
  className: PropTypes.string
}

export default NavRight
