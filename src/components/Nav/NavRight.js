import React from 'react'
import PropTypes from 'prop-types'

const NavRight = ({
  menu,
  ...props
}) => {
  let className = 'nav-right'
  if (menu) className += ' nav-menu'

  return <div className={className} {...props} />
}

NavRight.displayName = 'Nav.Right'

NavRight.propTypes = {
  menu: PropTypes.bool
}

export default NavRight
