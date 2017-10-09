import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const NavToggle = ({
  as: Toggle,
  className,
  ...props
}) => {
  const classes = classNames('nav-toggle', className)

  return (
    <Toggle className={classes} {...props}>
      <span />
      <span />
      <span />
    </Toggle>
  )
}

NavToggle.displayName = 'Nav.Toggle'

NavToggle.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string
}

NavToggle.defaultProps = {
  as: 'span'
}

export default NavToggle
