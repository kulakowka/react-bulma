import React from 'react'
import PropTypes from 'prop-types'
import LevelItem from './LevelItem'
import LevelLeft from './LevelLeft'
import LevelRight from './LevelRight'

/*
A multi-purpose horizontal level, which can contain almost any other element
*/
const Level = ({
  children,
  mobile
}) => {
  let className = 'level'
  if (mobile) className += ` is-mobile`

  return (
    <nav className={className}>
      {children}
    </nav>
  )
}

Level.displayName = 'Level'

Level.propTypes = {
  children: PropTypes.node,
  mobile: PropTypes.bool
}

Level.defaultProps = {
  mobile: false
}

Level.Item = LevelItem
Level.Left = LevelLeft
Level.Right = LevelRight

export default Level
