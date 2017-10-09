import React from 'react'
import PropTypes from 'prop-types'
import MessageHeader from './MessageHeader'
import MessageBody from './MessageBody'
import classNames from 'classnames'

/*
Colored message blocks, to emphasize part of your page
*/
const Message = ({
  as: Article,
  dark,
  primary,
  info,
  success,
  warning,
  danger,
  className,
  ...props
}) => {
  const classes = classNames('message', {
    'is-dark': dark,
    'is-primary': primary,
    'is-info': info,
    'is-success': success,
    'is-warning': warning,
    'is-danger': danger
  }, className)

  return <Article className={classes} {...props} />
}

Message.displayName = 'Message'

Message.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
  dark: PropTypes.bool,
  primary: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool
}

Message.defaultProps = {
  as: 'article'
}

Message.Header = MessageHeader
Message.Body = MessageBody

export default Message
