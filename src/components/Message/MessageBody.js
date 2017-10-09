import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MessageBody = ({
  className,
  ...props
}) => {
  const classes = classNames('message-body', className)

  return <div className={classes} {...props} />
}

MessageBody.displayName = 'Message.Body'

MessageBody.propTypes = {
  className: PropTypes.string
}

export default MessageBody
