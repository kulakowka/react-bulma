import React from 'react'
import PropTypes from 'prop-types'
import 'bulma/css/bulma.css'

const MediaRight = ({
  children
}) =>
  <div className='media-right'>
    {children}
  </div>

MediaRight.displayName = 'Media.Right'

MediaRight.propTypes = {
  children: PropTypes.node
}

export default MediaRight
