import React from 'react'
import PropTypes from 'prop-types'

/*
A simple container to center your content horizontally
*/
const Container = ({
  fluid,
  hasTextCentered,
  ...props
}) => {
  let className = 'container'
  if (fluid) className += ` is-fluid`
  if (hasTextCentered) className += ` has-text-centered`

  return <div className={className} {...props} />
}

Container.displayName = 'Container'

Container.propTypes = {
  fluid: PropTypes.bool
}

export default Container
