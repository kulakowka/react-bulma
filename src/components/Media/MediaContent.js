import React from 'react'
import PropTypes from 'prop-types'

const MediaContent = ({
  children
}) =>
  <div className='media-content'>
    {children}
  </div>

MediaContent.displayName = 'Media.Content'

MediaContent.propTypes = {
  children: PropTypes.node
}

export default MediaContent
