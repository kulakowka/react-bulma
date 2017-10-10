import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Link = ({
  as: A,
  className,
  ...props
}) => {
  const classes = classNames('link', className)

  return <A className={classes} {...props} />
}

Link.displayName = 'Link'

Link.propTypes = {
  as: PropTypes.node,
}

Link.defaultProps = {
  as: 'a'
}

export default Link
