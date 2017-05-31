import React from 'react'
import PropTypes from 'prop-types'

/*
A single class to handle WYSIWYG generated content, where only HTML tags are available
*/
const Content = ({
  children,
  html
}) =>
  <div className='content'>
    {html
      ? <div dangerouslySetInnerHTML={{ __html: html }} />
      : <div className='content'>{children}</div>
    }
  </div>

Content.displayName = 'Content'

Content.propTypes = {
  children: PropTypes.node,
  html: PropTypes.string
}

export default Content
