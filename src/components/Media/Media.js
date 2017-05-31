import React from 'react'
import PropTypes from 'prop-types'
import MediaLeft from './MediaLeft'
import MediaContent from './MediaContent'
import MediaRight from './MediaRight'

/*
@TODO: need to add docs...
The famous media object prevalent in social media interfaces, but useful in any context
*/
const Media = ({
  children
}) =>
  <article className='media'>{children}</article>

Media.displayName = 'Media'

Media.propTypes = {
  children: PropTypes.node
}

Media.Left = MediaLeft
Media.Content = MediaContent
Media.Right = MediaRight

export default Media
