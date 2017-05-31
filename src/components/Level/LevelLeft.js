import React from 'react'
import PropTypes from 'prop-types'

const LevelLeft = ({
  children
}) =>
  <div className='level-left'>
    {children}
  </div>

LevelLeft.displayName = 'Level.Left'

LevelLeft.propTypes = {
  children: PropTypes.node
}

export default LevelLeft
