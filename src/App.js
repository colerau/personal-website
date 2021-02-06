import './App.css';
import Like from './components/Like.js'
import CommentForm from './components/CommentForm.js'
import About from './components/About.js'

const App = () => {
  return (
    <div className="App">
      <h1>Cole Rau</h1>
      <About />
      <CommentForm />
      <p>This is a sample comment</p>
      <Like />
    </div>
  );
}

export default App;
