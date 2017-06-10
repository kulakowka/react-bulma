import React from 'react'
import PanelBlock from './PanelBlock'
import PanelHeading from './PanelHeading'
import PanelIcon from './PanelIcon'
import PanelTabs from './PanelTabs'
import PanelTab from './PanelTab'

/*
A composable panel, for compact controls
*/
const Panel = props =>
  <nav className='panel' {...props} />

Panel.displayName = 'Panel'

Panel.Block = PanelBlock
Panel.Heading = PanelHeading
Panel.Icon = PanelIcon
Panel.Tabs = PanelTabs
Panel.Tab = PanelTab

export default Panel
