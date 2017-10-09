import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const PanelTab = ({
  as: Tab,
  active,
  className,
  ...props
}) => {
  const classes = classNames('panel-tab', {
    'is-active': active
  }, className)

  return <Tab className={classes} {...props} />
}

PanelTab.displayName = 'Panel.Tab'

PanelTab.propTypes = {
  as: PropTypes.node,
  active: PropTypes.bool,
  className: PropTypes.string
}

PanelTab.defaultProps = {
  as: 'a'
}

export default PanelTab
