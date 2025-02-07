import React from 'react'

export default function FormItem(props) {
  const { children, name, handleChange, value, label } = props
  const onChange = value => {
    handleChange(name, value)
  }

  return (
    <div className="form">
      <span className="label">{ label }:</span>
      {
        React.isValidElement(children) && children.type.displayName === 'input'
          ? React.cloneElement(children, { onChange, value })
          : null
      }
    </div>
  )
}

FormItem.displayName = 'formItem'
