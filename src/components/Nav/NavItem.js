import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const NavItem = ({
  as: Item,
  children,
  active,
  tab,
  hiddenTablet,
  hiddenMobile,
  className,
  ...props
}) => {
  const classes = classNames('nav-item', {
    'is-active': active,
    'is-tab': tab,
    'is-hidden-tablet': hiddenTablet,
    'is-hidden-mobile': hiddenMobile
  }, className)

  return <Item className={classes} {...props} />
}

NavItem.displayName = 'Nav.Item'

NavItem.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
  active: PropTypes.bool,
  tab: PropTypes.bool,
  hiddenTablet: PropTypes.bool,
  hiddenMobile: PropTypes.bool
}

NavItem.defaultProps = {
  as: 'a'
}

export default NavItem
