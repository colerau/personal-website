import React, { useState } from 'react'

// class Form extends PureComponent {
//   state = {
//     name: ""
//   }

//   handleChange = (event) => {
//     this.setState({
//       name: event.target.value
//     })
//   }

//   handleSubmit = (event) => {
//     event.preventDefault()
//     console.log("submit button clicked")
//     this.setState({
//       name: ""
//     })
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input type="text" value={this.state.name} onChange={this.handleChange} />
//           <input type="submit" value="Submit Name" />
//         </form>
//       </div>
//     )
//   }
// }

// export default Form

function CommentForm(props) {

  const [comment, setComment] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    console.log(`submitting ${comment}`)
  }

  return (
    <div>
      <h1>Write a comment</h1>
      <form onSubmit={handleSubmit}>
        <label>
          New Comment:
          <input type="text" value={comment} onChange={e => setComment(e.target.value)}/>
        </label>
        <input type="Submit" />
      </form>
    </div>
  )
}

export default CommentForm