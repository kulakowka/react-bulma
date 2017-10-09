import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CardHeaderTitle = ({
  as: Title,
  className,
  ...props
}) => {
  const classes = classNames('card-header-title', className)

  return <Title className={classes} {...props} />
}

CardHeaderTitle.displayName = 'Card.Header.Title'

CardHeaderTitle.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string
}

CardHeaderTitle.defaultProps = {
  as: 'div'
}

export default CardHeaderTitle
