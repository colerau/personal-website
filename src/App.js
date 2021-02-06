import './App.css';
import Like from './components/Like.js'
import CommentForm from './components/CommentForm.js'

const App = () => {
  // const test = (num) => {
  //   console.log(`like button clicked ${num} time(s)`)
  // }
  return (
    <div className="App">

      {/* <Like test={test}/>
      <br /> */}
      <CommentForm />
    </div>
  );
}

export default App;
