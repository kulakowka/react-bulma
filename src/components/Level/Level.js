import React from 'react'
import PropTypes from 'prop-types'
import LevelItem from './LevelItem'
import LevelLeft from './LevelLeft'
import LevelRight from './LevelRight'
import classNames from 'classnames'

/*
A multi-purpose horizontal level, which can contain almost any other element
*/
const Level = ({
  as: Nav,
  mobile,
  className,
  ...props
}) => {
  const classes = classNames('level', {
    'is-mobile': mobile
  }, className)

  return <Nav className={classes} {...props} />
}

Level.displayName = 'Level'

Level.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
  mobile: PropTypes.bool
}

Level.defaultProps = {
  as: 'nav',
  mobile: false
}

Level.Item = LevelItem
Level.Left = LevelLeft
Level.Right = LevelRight

export default Level
