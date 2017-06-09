import React from 'react'
import PropTypes from 'prop-types'

const NavCenter = ({
  menu,
  ...props
}) => {
  let className = 'nav-center'
  if (menu) className += ' nav-menu'

  return <div className={className} {...props} />
}

NavCenter.displayName = 'Nav.Center'

NavCenter.propTypes = {
  menu: PropTypes.bool
}

export default NavCenter
