import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const PanelHeading = ({
  as: Heading,
  className,
  ...props
}) => {
  const classes = classNames('panel-heading', className)

  return <Heading className={classes} {...props} />
}

PanelHeading.displayName = 'Panel.Heading'

PanelHeading.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string
}

PanelHeading.defaultProps = {
  as: 'p'
}

export default PanelHeading
