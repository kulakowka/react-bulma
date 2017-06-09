import React from 'react'
import PropTypes from 'prop-types'

const NavLeft = ({
  menu,
  ...props
}) => {
  let className = 'nav-left'
  if (menu) className += ' nav-menu'

  return <div className={className} {...props} />
}

NavLeft.displayName = 'Nav.Left'

NavLeft.propTypes = {
  menu: PropTypes.bool
}

export default NavLeft
