import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const TableTr = ({
  selected,
  className,
  ...props
}) => {
  const classes = classNames({
    'is-selected': selected
  }, className)

  return <tr className={classes} {...props} />
}

TableTr.displayName = 'Table.Tr'

TableTr.propTypes = {
  className: PropTypes.string
}

export default TableTr
