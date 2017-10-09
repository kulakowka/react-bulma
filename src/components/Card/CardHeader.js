import React from 'react'
import PropTypes from 'prop-types'
import CardHeaderTitle from './CardHeaderTitle'
import CardHeaderIcon from './CardHeaderIcon'
import classNames from 'classnames'

const CardHeader = ({
  className,
  ...props
}) => {
  const classes = classNames('card-header', className)

  return <header className={classes} {...props} />
}

CardHeader.displayName = 'Card.Header'

CardHeader.propTypes = {
  className: PropTypes.string
}

CardHeader.Title = CardHeaderTitle
CardHeader.Icon = CardHeaderIcon

export default CardHeader
