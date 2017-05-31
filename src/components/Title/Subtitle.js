import React from 'react'
import PropTypes from 'prop-types'

/*
Simple headings to add depth to your page
*/
const SubTitle = ({
  children,
  is
}) => {
  const Hn = is ? `h${is}` : 'h2'

  let className = 'subtitle'
  if (is) className += ` is-${is}`

  return (
    <Hn className={className}>
      {children}
    </Hn>
  )
}

SubTitle.displayName = 'SubTitle'

SubTitle.propTypes = {
  children: PropTypes.node,
  is: PropTypes.oneOf(['1', '2', '3', '4', '5', '6'])
}

SubTitle.defaultProps = {
  is: '5'
}

export default SubTitle
