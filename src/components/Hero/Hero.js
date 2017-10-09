import React from 'react'
import PropTypes from 'prop-types'
import HeroHead from './HeroHead'
import HeroBody from './HeroBody'
import HeroFoot from './HeroFoot'
import classNames from 'classnames'

/*
An imposing hero banner to showcase something
*/
const Hero = ({
  as: Section,
  primary,
  info,
  success,
  warning,
  danger,
  light,
  dark,
  bold,
  small,
  medium,
  large,
  fullheight,
  className,
  ...props
}) => {
  const classes = classNames('hero', {
    'is-primary': primary,
    'is-info': info,
    'is-success': success,
    'is-warning': warning,
    'is-danger': danger,
    'is-light': light,
    'is-dark': dark,
    'is-bold': bold,
    'is-small': small,
    'is-medium': medium,
    'is-large': large,
    'is-fullheight': fullheight
  }, className)

  return <Section className={classes} {...props} />
}

Hero.displayName = 'Hero'

Hero.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
  primary: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  bold: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  fullheight: PropTypes.bool
}

Hero.defaultProps = {
  as: 'section'
}

Hero.Head = HeroHead
Hero.Body = HeroBody
Hero.Foot = HeroFoot

export default Hero
