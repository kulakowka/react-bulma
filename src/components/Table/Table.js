import React from 'react'
import PropTypes from 'prop-types'
import TableHead from './TableThead'
import TableFoot from './TableFoot'
import TableBody from './TableBody'
import TableTr from './TableTr'
import TableTd from './TableTd'
import TableTh from './TableTh'
import classNames from 'classnames'

/*
The inevitable HTML table, with special case cells
*/
const Table = ({
  bordered,
  striped,
  narrow,
  className,
  ...props
}) => {
  const classes = classNames('table', {
    'is-bordered': bordered,
    'is-striped': striped,
    'is-narrow': narrow
  }, className)

  return <table className={classes} {...props} />
}

Table.displayName = 'Table'

Table.propTypes = {
  className: PropTypes.string,
  narrow: PropTypes.bool,
  bordered: PropTypes.bool,
  striped: PropTypes.bool
}

Table.Head = TableHead
Table.Foot = TableFoot
Table.Body = TableBody
Table.Tr = TableTr
Table.Td = TableTd
Table.Th = TableTh

export default Table
