import React from 'react'
import PropTypes from 'prop-types'
import 'bulma/css/bulma.css'

/*
Simple headings to add depth to your page
*/
const Title = ({
  children,
  is,
  spaced
}) => {
  const Hn = is ? `h${is}` : 'h1'

  let className = 'title'
  if (is) className += ` is-${is}`
  if (spaced) className += ` is-spaced`

  return (
    <Hn className={className}>
      {children}
    </Hn>
  )
}

Title.displayName = 'Title'

Title.propTypes = {
  children: PropTypes.node,
  spaced: PropTypes.bool,
  is: PropTypes.oneOf(['1', '2', '3', '4', '5', '6'])
}

Title.defaultProps = {
  is: '3',
  spaced: false
}

export default Title
