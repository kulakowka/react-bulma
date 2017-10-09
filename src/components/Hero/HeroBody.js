import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const HeroBody = ({
  className,
  ...props
}) => {
  const classes = classNames('hero-body', className)

  return <div className={classes} {...props} />
}

HeroBody.displayName = 'Hero.Body'

HeroBody.propTypes = {
  className: PropTypes.string
}

export default HeroBody
