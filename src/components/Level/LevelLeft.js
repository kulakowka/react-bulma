import React from 'react'
import PropTypes from 'prop-types'
import 'bulma/css/bulma.css'

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
