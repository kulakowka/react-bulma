import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const HeroHead = ({
  className,
  ...props
}) => {
  const classes = classNames('hero-head', className)

  return <div className={classes} {...props} />
}

HeroHead.displayName = 'Hero.Head'

HeroHead.propTypes = {
  className: PropTypes.string
}

export default HeroHead
