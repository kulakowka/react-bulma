import React from 'react'
import PropTypes from 'prop-types'
import CardImage from './CardImage'
import CardContent from './CardContent'
import CardHeader from './CardHeader'
import CardFooter from './CardFooter'
import classNames from 'classnames'

/*
An all-around flexible and composable component
*/
const Card = ({
  className,
  ...props
}) => {
  const classes = classNames('card', className)

  return <div className={classes} {...props} />
}

Card.propTypes = {
  className: PropTypes.string
}

Card.Image = CardImage
Card.Content = CardContent
Card.Header = CardHeader
Card.Footer = CardFooter

export default Card
