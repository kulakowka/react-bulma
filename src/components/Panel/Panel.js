import React from 'react'
import PropTypes from 'prop-types'
import PanelBlock from './PanelBlock'
import PanelHeading from './PanelHeading'
import PanelIcon from './PanelIcon'
import PanelTabs from './PanelTabs'
import PanelTab from './PanelTab'
import classNames from 'classnames'

/*
A composable panel, for compact controls
*/
const Panel = ({
  as: Nav,
  className,
  ...props
}) => {
  const classes = classNames('panel', className)

  return <Nav className={classes} {...props} />
}

Panel.displayName = 'Panel'

Panel.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string
}

Panel.defaultProps = {
  as: 'nav'
}

Panel.Block = PanelBlock
Panel.Heading = PanelHeading
Panel.Icon = PanelIcon
Panel.Tabs = PanelTabs
Panel.Tab = PanelTab

export default Panel
