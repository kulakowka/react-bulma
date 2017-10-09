import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CardContent = ({
  className,
  ...props
}) => {
  const classes = classNames('card-content', className)

  return <div className={classes} {...props} />
}

CardContent.displayName = 'Card.Content'

CardContent.propTypes = {
  className: PropTypes.string
}

export default CardContent
