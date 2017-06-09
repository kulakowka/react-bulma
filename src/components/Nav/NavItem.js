import React from 'react'
import PropTypes from 'prop-types'

const NavItem = ({
  children,
  active,
  tab,
  hiddenTablet,
  ...props
}) => {
  let className = 'nav-item'
  if (active) className += ' is-active'
  if (tab) className += ' is-tab'
  if (hiddenTablet) className += 'is-hidden-tablet'

  return <a className={className} {...props}>{children}</a>
}

NavItem.displayName = 'Nav.Item'

NavItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  tab: PropTypes.bool
}

export default NavItem
