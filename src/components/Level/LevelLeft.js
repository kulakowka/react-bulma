import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const LevelLeft = ({
  className,
  ...props
}) => {
  const classes = classNames('level-left', className)

  return <div className={classes} {...props} />
}

LevelLeft.displayName = 'Level.Left'

LevelLeft.propTypes = {
  className: PropTypes.string
}

export default LevelLeft
