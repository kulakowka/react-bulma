import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CardFooterItem = ({
  className,
  ...props
}) => {
  const classes = classNames('card-footer-item', className)

  return <div className={classes} {...props} />
}

CardFooterItem.displayName = 'Card.Footer.Item'

CardFooterItem.propTypes = {
  className: PropTypes.string
}

export default CardFooterItem
