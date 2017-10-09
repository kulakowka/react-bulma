import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const PanelTabs = ({
  as: Tabs,
  className,
  ...props
}) => {
  const classes = classNames('panel-tabs', className)

  return <Tabs className={classes} {...props} />
}

PanelTabs.displayName = 'Panel.Tabs'

PanelTabs.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string
}

PanelTabs.defaultProps = {
  as: 'p'
}

export default PanelTabs
