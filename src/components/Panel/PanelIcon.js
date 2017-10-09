import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const PanelIcon = ({
  as: Icon,
  className,
  ...props
}) => {
  const classes = classNames('panel-icon', className)

  return <Icon className={classes} {...props} />
}

PanelIcon.displayName = 'Panel.Icon'

PanelIcon.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string
}

PanelIcon.defaultProps = {
  as: 'span'
}

export default PanelIcon
