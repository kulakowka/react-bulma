import React from 'react'
import PropTypes from 'prop-types'
import NavBrand from './NavBrand'
import NavItem from './NavItem'
import NavLeft from './NavLeft'
import NavRight from './NavRight'
import NavToggle from './NavToggle'
import classNames from 'classnames'

/*
A responsive horizontal nav bar that can contain links, tabs, buttons, icons, and a logo
*/
const Nav = ({
  as: Div,
  hasShadow,
  className,
  ...props
}) => {
  const classes = classNames('navbar', {
    'has-shadow': hasShadow
  }, className)

  return <Div className={classes} {...props} />
}

Nav.displayName = 'Nav'

Nav.propTypes = {
  as: PropTypes.node,
  hasShadow: PropTypes.bool,
  className: PropTypes.string
}

Nav.defaultProps = {
  as: 'nav'
}

Nav.Brand = NavBrand
Nav.Left = NavLeft
Nav.Right = NavRight
Nav.Item = NavItem
Nav.Toggle = NavToggle

export default Nav
