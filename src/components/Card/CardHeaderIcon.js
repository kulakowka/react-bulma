import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CardHeaderIcon = ({
  className,
  children,
  ...props
}) => {
  const classes = classNames('card-header-icon', className)

  return (
    <a className={classes} {...props}>
      <span className='icon'>
        {children}
      </span>
    </a>
  )
}

CardHeaderIcon.displayName = 'Card.Header.Icon'

CardHeaderIcon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default CardHeaderIcon
