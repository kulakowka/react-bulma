import React from 'react'
import PropTypes from 'prop-types'

/*
@TODO: need to add docs...
A versatile delete cross
*/
const Delete = ({
  small,
  medium,
  large
}) => {
  let className = 'delete'

  if (small) className += ` is-small`
  if (medium) className += ` is-medium`
  if (large) className += ` is-large`

  return <div className={className} />
}

Delete.displayName = 'Delete'

Delete.propTypes = {
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool
}

export default Delete
