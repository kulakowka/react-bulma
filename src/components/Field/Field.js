import React from 'react'
import PropTypes from 'prop-types'

const Field = ({
  hasAddons,
  ...props
}) => {
  let className = 'field'
  if (hasAddons) className += ` has-addons`

  return <div className={className} {...props} />
}
Field.displayName = 'Field'

Field.propTypes = {
  hasAddons: PropTypes.bool
}

export default Field
