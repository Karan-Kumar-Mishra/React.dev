import './App.css';
import { BrowserRouter as Router, Route, Routes ,Link,to} from 'react-router-dom';
function App() {
  return (
    <Router> 
      <div className="App">
        <header className="App-header">
          <Link to="https://www.google.com" >google.com</Link>
        </header>
      </div>
    </Router>
  );
}

export default App;
