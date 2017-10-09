import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const PanelBlock = ({
  as: Div,
  active,
  label,
  className,
  ...props
}) => {
  const classes = classNames('panel-block', {
    'is-active': active,
    'is-label': label
  }, className)

  return <Div className={classes} {...props} />
}

PanelBlock.displayName = 'Panel.Block'

PanelBlock.propTypes = {
  as: PropTypes.node,
  active: PropTypes.bool,
  label: PropTypes.bool
}

PanelBlock.defaultProps = {
  as: 'div'
}

export default PanelBlock
