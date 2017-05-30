import React from 'react'
import PropTypes from 'prop-types'

const CardHeaderIcon = ({
  children
}) =>
  <a className='card-header-icon'>
    <span className='icon'>
      {children}
    </span>
  </a>

CardHeaderIcon.displayName = 'Card.Header.Icon'

CardHeaderIcon.propTypes = {
  children: PropTypes.node
}

export default CardHeaderIcon
