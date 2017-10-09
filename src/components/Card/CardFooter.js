import React from 'react'
import PropTypes from 'prop-types'
import CardFooterItem from './CardFooterItem'
import classNames from 'classnames'

const CardFooter = ({
  className,
  ...props
}) => {
  const classes = classNames('card-footer', className)

  return <footer className={classes} />
}

CardFooter.displayName = 'Card.Footer'

CardFooter.propTypes = {
  className: PropTypes.string
}

CardFooter.Item = CardFooterItem

export default CardFooter
