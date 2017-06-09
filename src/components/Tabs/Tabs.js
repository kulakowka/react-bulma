import React from 'react'
import PropTypes from 'prop-types'

/*
Simple responsive horizontal navigation tabs, with different styles
*/
const Tabs = ({
  boxed,
  fullwidth,
  ...props
}) => {
  let className = 'tabs'
  if (boxed) className += ' is-boxed'
  if (fullwidth) className += ' is-fullwidth'

  return <div className={className} {...props} />
}

Tabs.displayName = 'Tabs'

Tabs.propTypes = {
  boxed: PropTypes.bool,
  fullwidth: PropTypes.bool
}

export default Tabs
