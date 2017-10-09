import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const LevelRight = ({
  className,
  ...props
}) => {
  const classes = classNames('level-right', className)

  return <div className={classes} {...props} />
}

LevelRight.displayName = 'Level.Right'

LevelRight.propTypes = {
  className: PropTypes.string
}

export default LevelRight
