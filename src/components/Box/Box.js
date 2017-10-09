import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

/*
A white box to contain other elements
*/
const Box = ({
  className,
  ...props
}) => {
  const classes = classNames('box', className)

  return <div className={classes} {...props} />
}

Box.displayName = 'Box'

Box.propTypes = {
  className: PropTypes.string
}

export default Box
