import { useState } from "react"

export default function QuestionForm(props) {

  const [question, setQuestion] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    console.log(`submitted ${question}`)
  }

  return (
    <>
      <h1>Ask a question</h1>
      <form onSubmit={handleSubmit}>
        <label>
          New Question:
          <input type="text" value={question} onChange={e => setQuestion(e.target.value)} />
        </label>
        <input type="submit" />
      </form>
    </>
  )
}