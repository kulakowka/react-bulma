import React from 'react'
import PropTypes from 'prop-types'

const LevelRight = ({
  children
}) =>
  <div className='level-right'>
    {children}
  </div>

LevelRight.displayName = 'Level.Right'

LevelRight.propTypes = {
  children: PropTypes.node
}

export default LevelRight
