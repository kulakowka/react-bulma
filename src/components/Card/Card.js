import React from 'react'
import PropTypes from 'prop-types'
import CardImage from './CardImage'
import CardContent from './CardContent'
import CardHeader from './CardHeader'
import CardFooter from './CardFooter'

/*
An all-around flexible and composable component
*/
const Card = ({
  children
}) =>
  <div className='card'>
    {children}
  </div>

Card.propTypes = {
  children: PropTypes.node
}

Card.Image = CardImage
Card.Content = CardContent
Card.Header = CardHeader
Card.Footer = CardFooter

export default Card
