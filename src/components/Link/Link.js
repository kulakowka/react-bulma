import React from 'react'
import PropTypes from 'prop-types'

const Link = ({
  success,
  info,
  children,
  ...props
}) => {
  let className = 'link'
  if (success) className += ` is-success`
  if (info) className += ` is-info`

  return <a className={className} {...props}>{children}</a>
}

Link.displayName = 'Link'

Link.propTypes = {
  children: PropTypes.node,
  success: PropTypes.bool,
  info: PropTypes.bool
}
Link.defaultProps = {
  children: ''
}

export default Link
