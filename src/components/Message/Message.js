import React from 'react'
import PropTypes from 'prop-types'
import MessageHeader from './MessageHeader'
import MessageBody from './MessageBody'

/*
Colored message blocks, to emphasize part of your page
*/
const Message = ({
  dark,
  primary,
  info,
  success,
  warning,
  danger,
  ...props
}) => {
  let className = 'message'
  if (dark) className += ` is-dark`
  if (primary) className += ` is-primary`
  if (info) className += ` is-info`
  if (success) className += ` is-success`
  if (warning) className += ` is-warning`
  if (danger) className += ` is-danger`

  return <article className={className} {...props} />
}

Message.displayName = 'Message'

Message.propTypes = {
  dark: PropTypes.bool,
  primary: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool
}

Message.Header = MessageHeader
Message.Body = MessageBody

export default Message
