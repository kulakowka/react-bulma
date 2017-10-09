import React from 'react'
import PropTypes from 'prop-types'

const Field = ({
  hasAddons,
  grouped,
  groupedCentered,
  groupedRight,
  ...props
}) => {
  let className = 'field'
  if (hasAddons) className += ` has-addons`
  if (grouped) className += ` is-grouped`
  if (groupedCentered) className += ` is-grouped is-grouped-centered`
  if (groupedRight) className += ` is-grouped is-grouped-right`

  return <div className={className} {...props} />
}
Field.displayName = 'Field'

Field.propTypes = {
  hasAddons: PropTypes.bool,
  grouped: PropTypes.bool,
  groupedCentered: PropTypes.bool,
  groupedRight: PropTypes.bool
}

export default Field
