import React from 'react'
import PropTypes from 'prop-types'

const PanelTab = ({
  active,
  children,
  ...props
}) => {
  let className = ''
  if (active) className += ' is-active'
  return <a className={className} {...props}>{children}</a>
}

PanelTab.displayName = 'Panel.Tab'

PanelTab.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool
}

export default PanelTab
