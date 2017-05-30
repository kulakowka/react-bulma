import React from 'react'
import PropTypes from 'prop-types'

const CardHeaderTitle = ({
  children
}) =>
  <div className='card-header-title'>
    {children}
  </div>

CardHeaderTitle.displayName = 'Card.Header.Title'

CardHeaderTitle.propTypes = {
  children: PropTypes.node
}

export default CardHeaderTitle
