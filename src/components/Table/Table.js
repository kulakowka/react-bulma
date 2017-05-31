import React from 'react'
import PropTypes from 'prop-types'
import TableHead from './TableThead'
import TableFoot from './TableFoot'
import TableBody from './TableBody'
import TableTr from './TableTr'
import TableTd from './TableTd'
import TableTh from './TableTh'

/*
The inevitable HTML table, with special case cells
*/
const Table = ({
  bordered,
  striped,
  narrow,
  ...props
}) => {
  let className = 'table'
  if (bordered) className += ` is-bordered`
  if (striped) className += ` is-striped`
  if (narrow) className += ` is-narrow`

  return <table {...props} className={className} />
}

Table.displayName = 'Table'

Table.propTypes = {
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
