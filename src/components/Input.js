import React from 'react'
import PropTypes from 'prop-types'

export const Input = ({ value, ...props }) => {
  return (
    <div>
      <input data-test="input" value={value} />
    </div>
  )
}

Input.propTypes = {
  value: PropTypes.string,
}

Input.defaultProps = {
  value: 'hello world',
}
