import React from 'react'
import PropTypes from 'prop-types'

const Control = ({
  hasIconsLeft,
  hasIconsRight,
  small,
  medium,
  large,
  loading,
  ...props
}) => {
  let className = 'control'

  if (hasIconsLeft) className += ' has-icons-left'
  if (hasIconsRight) className += ' has-icons-right'

  if (small) className += ` is-small`
  if (medium) className += ` is-medium`
  if (large) className += ` is-large`

  if (loading) className += ` is-loading`

  return <div className={className} {...props} />
}

Control.displayName = 'Control'

Control.propTypes = {
  hasIconsLeft: PropTypes.bool,
  hasIconsRight: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  loading: PropTypes.bool
}

export default Control
