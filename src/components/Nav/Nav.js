import React from 'react'
import PropTypes from 'prop-types'
import NavLeft from './NavLeft'
import NavCenter from './NavCenter'
import NavRight from './NavRight'
import NavItem from './NavItem'
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
  const classes = classNames('nav', {
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

Nav.Left = NavLeft
Nav.Center = NavCenter
Nav.Right = NavRight
Nav.Item = NavItem
Nav.Toggle = NavToggle

export default Nav
