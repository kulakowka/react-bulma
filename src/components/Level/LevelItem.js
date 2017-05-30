import React from 'react'
import PropTypes from 'prop-types'
import 'bulma/css/bulma.css'

const LevelItem = ({
  children
}) =>
  <div className='level-item'>
    {children}
  </div>

LevelItem.displayName = 'Level.Item'

LevelItem.propTypes = {
  children: PropTypes.node
}

export default LevelItem
