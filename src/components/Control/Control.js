import React from 'react'
import PropTypes from 'prop-types'

const Control = ({
  hasIconsLeft,
  hasIconsRight,
  ...props
}) => {
  let className = 'control'
  if (hasIconsLeft) className += ' has-icons-left'
  if (hasIconsRight) className += ' has-icons-right'

  return <div className={className} {...props} />
}

Control.displayName = 'Control'

Control.propTypes = {
  hasIconsLeft: PropTypes.bool,
  hasIconsRight: PropTypes.bool
}

export default Control
