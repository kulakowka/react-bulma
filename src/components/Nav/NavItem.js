import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const NavItem = ({
  as: Item,
  active,
  tab,
  hasDropdown,
  hiddenTablet,
  hiddenMobile,
  className,
  ...props
}) => {
  const classes = classNames('navbar-item', {
    'has-dropdown': hasDropdown,
    'is-active': active,
    'is-hidden-mobile': hiddenMobile,
    'is-hidden-tablet': hiddenTablet,
    'is-tab': tab
  }, className)

  return <Item className={classes} {...props} />
}

NavItem.displayName = 'Nav.Item'

NavItem.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.node,
  className: PropTypes.string,
  hasDropdown: PropTypes.bool,
  hiddenMobile: PropTypes.bool,
  hiddenTablet: PropTypes.bool,
  tab: PropTypes.bool
}

NavItem.defaultProps = {
  as: 'a'
}

export default NavItem
