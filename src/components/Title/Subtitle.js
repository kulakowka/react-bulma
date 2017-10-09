import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

/*
Simple headings to add depth to your page
*/
const SubTitle = ({
  as: Hn,
  className,
  is,
  spaced,
  ...props
}) => {
  const classes = classNames('subtitle', {
    [`is-${is}`]: is,
    'is-spaced': spaced
  }, className)

  return <Hn className={classes} {...props} />
}

SubTitle.displayName = 'SubTitle'

SubTitle.propTypes = {
  className: PropTypes.string,
  spaced: PropTypes.bool,
  is: PropTypes.oneOf(['1', '2', '3', '4', '5', '6'])
}

SubTitle.defaultProps = {
  as: 'h5',
  is: '5',
  spaced: false
}

export default SubTitle
