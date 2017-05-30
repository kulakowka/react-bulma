import React from 'react'
import PropTypes from 'prop-types'
import CardHeaderTitle from './CardHeaderTitle'
import CardHeaderIcon from './CardHeaderIcon'

const CardHeader = ({
  children
}) =>
  <header className='card-header'>
    {children}
  </header>

CardHeader.displayName = 'Card.Header'

CardHeader.propTypes = {
  children: PropTypes.node
}

CardHeader.Title = CardHeaderTitle
CardHeader.Icon = CardHeaderIcon

export default CardHeader
