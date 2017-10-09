import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const HeroFoot = ({
  className,
  ...props
}) => {
  const classes = classNames('hero-foot', className)

  return <div className={classes} {...props} />
}

HeroFoot.displayName = 'Hero.Foot'

HeroFoot.propTypes = {
  className: PropTypes.string
}

export default HeroFoot
