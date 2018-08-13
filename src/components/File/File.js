import React from 'react'
import PropTypes from 'prop-types'
import FileCta from './FileCta'
import FileIcon from './FileIcon'
import FileInput from './FileInput'
import FileLabel from './FileLabel'
import FileName from './FileName'
import classNames from 'classnames'

/*
A multi-purpose horizontal level, which can contain almost any other element
*/
const File = ({
  boxed,
  className,
  centered,
  danger,
  fullwidth,
  info,
  large,
  medium,
  name,
  primary,
  right,
  small,
  warning,
  ...props
}) => {
  const classes = classNames('file', {
    'is-boxed': boxed,
    'is-centered': centered,
    'is-danger': danger,
    'is-fullwidth': fullwidth,
    'is-info': info,
    'is-large': large,
    'is-medium': medium,
    'has-name': name,
    'is-primary': primary,
    'is-right': right,
    'is-small': small,
    'is-warning': warning
  }, className)

  return <div className={classes} {...props} />
}

File.displayName = 'File'

File.propTypes = {
  boxed: PropTypes.bool,
  centered: PropTypes.bool,
  className: PropTypes.string,
  danger: PropTypes.bool,
  fullwidth: PropTypes.bool,
  large: PropTypes.bool,
  medium: PropTypes.bool,
  info: PropTypes.bool,
  name: PropTypes.bool,
  primary: PropTypes.bool,
  right: PropTypes.bool,
  small: PropTypes.bool,
  warning: PropTypes.bool
}

File.Cta = FileCta
File.Icon = FileIcon
File.Input = FileInput
File.Label = FileLabel
File.Name = FileName

export default File
