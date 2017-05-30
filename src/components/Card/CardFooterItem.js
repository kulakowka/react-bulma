import React from 'react'
import PropTypes from 'prop-types'

const CardFooterItem = props => {
  const {
    className
  } = props

  let classNames = 'card-footer-item'
  if (className) classNames += ` ${className}`

  return <div {...props} className={classNames} />
}

CardFooterItem.displayName = 'Card.Footer.Item'

CardFooterItem.propTypes = {
  children: PropTypes.node
}

export default CardFooterItem
