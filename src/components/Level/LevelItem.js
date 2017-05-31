import React from 'react'
import PropTypes from 'prop-types'

const LevelItem = ({
  hasTextCentered,
  ...props
}) => {
  let className = 'level-item'
  if (hasTextCentered) className += ` has-text-centered`

  return <div className={className} {...props} />
}

LevelItem.displayName = 'Level.Item'

LevelItem.propTypes = {
  hasTextCentered: PropTypes.bool,
  children: PropTypes.node
}

export default LevelItem
