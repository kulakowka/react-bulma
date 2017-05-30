import React from 'react'
import PropTypes from 'prop-types'
import CardFooterItem from './CardFooterItem'

const CardFooter = ({
  children
}) =>
  <footer className='card-footer'>
    {children}
  </footer>

CardFooter.displayName = 'Card.Footer'

CardFooter.propTypes = {
  children: PropTypes.node
}

CardFooter.Item = CardFooterItem

export default CardFooter
