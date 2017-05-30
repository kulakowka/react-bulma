import React from 'react'
import PropTypes from 'prop-types'
import 'bulma/css/bulma.css'

const MediaLeft = ({
  children
}) =>
  <div className='media-left'>
    {children}
  </div>

MediaLeft.displayName = 'Media.Left'

MediaLeft.propTypes = {
  children: PropTypes.node
}

export default MediaLeft
