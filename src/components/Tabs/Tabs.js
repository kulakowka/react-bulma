import React from 'react'
import PropTypes from 'prop-types'

/*
Simple responsive horizontal navigation tabs, with different styles
*/
const Tabs = ({
  boxed,
  right,
  small,
  medium,
  large,
  fullwidth,
  centered,
  toggle,
  ...props
}) => {
  let className = 'tabs'
  if (boxed) className += ' is-boxed'
  if (right) className += ' is-right'
  if (small) className += ' is-small'
  if (medium) className += ' is-medium'
  if (large) className += ' is-large'
  if (fullwidth) className += ' is-fullwidth'
  if (centered) className += ' is-centered'
  if (toggle) className += ' is-toggle'

  return <div className={className} {...props} />
}

Tabs.displayName = 'Tabs'

Tabs.propTypes = {
  right: PropTypes.bool,
  centered: PropTypes.bool,
  boxed: PropTypes.bool,
  fullwidth: PropTypes.bool
}

export default Tabs
