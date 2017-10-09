import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Field = ({
  hasAddons,
  grouped,
  groupedCentered,
  groupedRight,
  className,
  ...props
}) => {
  const classes = classNames('field', {
    'has-addons': hasAddons,
    'is-grouped': grouped || groupedCentered || groupedRight,
    'is-grouped-centered': groupedCentered,
    'is-grouped-right': groupedRight
  }, className)

  return <div className={classes} {...props} />
}

Field.displayName = 'Field'

Field.propTypes = {
  className: PropTypes.string,
  hasAddons: PropTypes.bool,
  grouped: PropTypes.bool,
  groupedCentered: PropTypes.bool,
  groupedRight: PropTypes.bool
}

export default Field
