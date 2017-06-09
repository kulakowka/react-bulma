import React from 'react'
import PropTypes from 'prop-types'
import HeroHead from './HeroHead'
import HeroBody from './HeroBody'
import HeroFoot from './HeroFoot'

/*
An imposing hero banner to showcase something
*/
const Hero = ({
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
  ...props
}) => {
  let className = 'hero'
  if (primary) className += ' is-primary'
  if (info) className += ' is-info'
  if (success) className += ' is-success'
  if (warning) className += ' is-warning'
  if (danger) className += ' is-danger'
  if (light) className += ' is-light'
  if (dark) className += ' is-dark'
  if (bold) className += ' is-bold'
  if (small) className += ' is-small'
  if (medium) className += ' is-medium'
  if (large) className += ' is-large'
  if (fullheight) className += ' is-fullheight'

  return <section className={className} {...props} />
}

Hero.displayName = 'Hero'

Hero.propTypes = {
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

Hero.Head = HeroHead
Hero.Body = HeroBody
Hero.Foot = HeroFoot

export default Hero
