import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const NavBrand = ({
  as: Div,
  className,
  ...props
}) => {
  const classes = classNames('navbar-brand', className)

  return <Div className={classes} {...props} />
}

NavBrand.displayName = 'Nav.Brand'

NavBrand.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string
}

NavBrand.defaultProps = {
  as: 'div'
}

export default NavBrand
