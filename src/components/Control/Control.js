import React from 'react'
import PropTypes from 'prop-types'

const Control = ({
  hasIconLeft,
  ...props
}) => {
  let className = 'control'
  if (hasIconLeft) className += ' has-icon-left'

  return <div className={className} {...props} />
}

Control.displayName = 'Control'

Control.propTypes = {
  hasIconLeft: PropTypes.bool
}

export default Control
