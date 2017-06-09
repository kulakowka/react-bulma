import React from 'react'
import NavLeft from './NavLeft'
import NavCenter from './NavCenter'
import NavRight from './NavRight'
import NavItem from './NavItem'
import NavToggle from './NavToggle'

/*
A responsive horizontal nav bar that can contain links, tabs, buttons, icons, and a logo
*/
const Nav = ({
  hasShadow,
  ...props
}) => {
  let className = 'nav'
  if (hasShadow) className += ' has-shadow'

  return <nav className={className} {...props} />
}

Nav.displayName = 'Nav'

Nav.Left = NavLeft
Nav.Center = NavCenter
Nav.Right = NavRight
Nav.Item = NavItem
Nav.Toggle = NavToggle

export default Nav
