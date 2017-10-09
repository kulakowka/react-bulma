import React from 'react'
import PropTypes from 'prop-types'
import MediaLeft from './MediaLeft'
import MediaContent from './MediaContent'
import MediaRight from './MediaRight'
import classNames from 'classnames'

/*
The famous media object prevalent in social media interfaces, but useful in any context
*/
const Media = ({
  as: Article,
  className,
  ...props
}) => {
  const classes = classNames('media', className)

  return <Article className={classes} {...props} />
}

Media.displayName = 'Media'

Media.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string
}

Media.defaultProps = {
  as: 'article'
}

Media.Left = MediaLeft
Media.Content = MediaContent
Media.Right = MediaRight

export default Media
