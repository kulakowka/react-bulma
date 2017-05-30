import React from 'react'
import PropTypes from 'prop-types'
import 'bulma/css/bulma.css'

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
