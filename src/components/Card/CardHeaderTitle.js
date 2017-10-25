import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CardHeaderTitle = ({
  as: Title,
  centered,
  className,
  ...props
}) => {
  const classes = classNames('card-header-title', {
    'is-centered': centered
  }, className)

  return <Title className={classes} {...props} />
}

CardHeaderTitle.displayName = 'Card.Header.Title'

CardHeaderTitle.propTypes = {
  as: PropTypes.node,
  centered: PropTypes.bool,
  className: PropTypes.string
}

CardHeaderTitle.defaultProps = {
  as: 'div'
}

export default CardHeaderTitle
