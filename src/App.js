import './App.css';
import Like from './components/Like.js'

const App = () => {
  const test = (num) => {
    console.log(`like button clicked ${num} time(s)`)
  }
  return (
    <div className="App">

      <Like test={test}/>
    </div>
  );
}

export default App;
