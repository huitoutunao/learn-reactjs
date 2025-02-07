import React from 'react'

class Form extends React.Component {
  state = {
    formData: {}
  }

  submitForm = cb => {
    cb({ ...this.state.formData })
  }

  resetForm = () => {
    const { formData } = this.state
    Object.keys(formData).forEach(item => {
      formData[item] = ''
    })
    this.setState({
      formData
    })
  }

  setValue = (name, value) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value
      }
    })
  }

  render() {
    const { children } = this.props
    const renderChildren = []

    React.Children.forEach(children, child => {
      if (child.type.displayName === 'formItem') {
        const { name } = child.props
        const Children = React.cloneElement(child, {
          key: name,
          handleChange: this.setValue,
          value: this.state.formData[name] || '',
        }, child.props.children)
        renderChildren.push(Children)
      }
    })

    return renderChildren
  }
}

Form.displayName = 'form'

export default Form
