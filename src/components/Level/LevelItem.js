import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const LevelItem = ({
  hasTextCentered,
  className,
  ...props
}) => {
  const classes = classNames('level-item', {
    'has-text-centered': hasTextCentered
  }, className)

  return <div className={classes} {...props} />
}

LevelItem.displayName = 'Level.Item'

LevelItem.propTypes = {
  hasTextCentered: PropTypes.bool,
  className: PropTypes.string
}

export default LevelItem
