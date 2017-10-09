import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Checkbox = ({
  as: Label,
  children,
  className,
  ...props
}) => {
  const classes = classNames('checkbox', className)

  return (
    <Label className={classes}>
      <input type='checkbox' {...props} />
      {' '}
      {children}
    </Label>
  )
}
Checkbox.displayName = 'Checkbox'

Checkbox.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node
}

Checkbox.defaultProps = {
  as: 'label'
}

export default Checkbox
