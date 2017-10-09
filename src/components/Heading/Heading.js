import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Heading = ({
  as: Hn,
  className,
  ...props
}) => {
  const classes = classNames('heading', className)

  return <Hn className={classes} {...props} />
}

Heading.displayName = 'Heading'

Heading.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string
}

Heading.defaultProps = {
  as: 'div'
}

export default Heading
