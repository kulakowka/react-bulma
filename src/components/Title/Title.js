import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

/*
Simple headings to add depth to your page
*/
const Title = ({
  as: Hn,
  className,
  is,
  spaced,
  ...props
}) => {
  const classes = classNames('title', {
    [`is-${is}`]: is,
    'is-spaced': spaced
  }, className)

  return <Hn className={classes} {...props} />
}

Title.displayName = 'Title'

Title.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
  spaced: PropTypes.bool,
  is: PropTypes.oneOf(['1', '2', '3', '4', '5', '6'])
}

Title.defaultProps = {
  as: 'h1',
  is: '1',
  spaced: false
}

export default Title
