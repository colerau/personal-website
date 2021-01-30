import React, {PureComponent} from 'react'

class Form extends PureComponent {
  state = {
    name: ""
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("submit button clicked")
    this.setState({
      name: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name} onChange={this.handleChange} />
          <input type="submit" value="Submit Name" />
        </form>
      </div>
    )
  }
}

export default Form