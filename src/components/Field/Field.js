import React from 'react'
import PropTypes from 'prop-types'

const Field = ({
  hasAddons,
  grouped,
  ...props
}) => {
  let className = 'field'
  if (hasAddons) className += ` has-addons`
  if (grouped) className += ` is-grouped`

  return <div className={className} {...props} />
}
Field.displayName = 'Field'

Field.propTypes = {
  hasAddons: PropTypes.bool,
  grouped: PropTypes.bool
}

export default Field
