import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

/*
A simple container to center your content horizontally
*/
const Container = ({
  fluid,
  hasTextCentered,
  className,
  ...props
}) => {
  const classes = classNames('container', {
    'is-fluid': fluid,
    'has-text-centered': hasTextCentered,
    className
  })

  return <div className={classes} {...props} />
}

Container.displayName = 'Container'

Container.propTypes = {
  fluid: PropTypes.bool,
  hasTextCentered: PropTypes.bool,
  className: PropTypes.string
}

export default Container
