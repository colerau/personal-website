import './App.css';
import Like from './components/Like.js'
import CommentForm from './components/CommentForm.js'
import About from './components/About.js'
import NavBar from './components/NavBar.js'

const App = () => {
  return (
    <div className="App">
      <h1>Cole Rau</h1>
      <About />
      <br />
      <NavBar />
      <CommentForm />
      <p>This is a sample comment</p>
      <Like />
    </div>
  );
}

export default App;
