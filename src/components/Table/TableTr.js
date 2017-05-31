import React from 'react'

const TableTr = ({
  selected,
  ...props
}) => {
  let className = ''
  if (selected) className += ` is-selected`

  return <tr {...props} className={className} />
}

TableTr.displayName = 'Table.Tr'

export default TableTr
