import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

/*
A simple container to divide your page into sections, like the one you're currently reading
*/
const Section = ({
  small,
  medium,
  large,
  className,
  ...props
}) => {
  const classes = classNames('section', {
    'is-small': small,
    'is-medium': medium,
    'is-large': large
  }, className)

  return <section className={classes} {...props} />
}

Section.displayName = 'Section'

Section.propTypes = {
  className: PropTypes.node,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool
}

export default Section
