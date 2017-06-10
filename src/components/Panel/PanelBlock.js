import React from 'react'
import PropTypes from 'prop-types'

const PanelBlock = ({
  active,
  label,
  href,
  ...props
}) => {
  let className = 'panel-block'
  if (active) className += ' is-active'

  const Div = href ? 'a' : label ? 'label' : 'div'

  return <Div className={className} {...props} />
}

PanelBlock.displayName = 'Panel.Block'

PanelBlock.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.bool
}

export default PanelBlock
