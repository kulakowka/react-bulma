import React from 'react'
import PropTypes from 'prop-types'

/*
A simple container to divide your page into sections, like the one you're currently reading
*/
const Section = ({
  medium,
  large,
  ...props
}) => {
  let className = 'section'
  if (medium) className += ` is-medium`
  if (large) className += ` is-large`

  return <section className={className} {...props} />
}

Section.displayName = 'Section'

Section.propTypes = {
  medium: PropTypes.bool,
  large: PropTypes.bool
}

export default Section
