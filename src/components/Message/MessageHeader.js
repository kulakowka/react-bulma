import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MessageHeader = ({
  className,
  ...props
}) => {
  const classes = classNames('message-header', className)

  return <div className={classes} {...props} />
}

MessageHeader.displayName = 'Message.Header'

MessageHeader.propTypes = {
  className: PropTypes.string
}

export default MessageHeader
