import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './Search';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Search} />
        <Route path="/results" component={Results} />
      </Switch>
    </Router>
    
  );
}

export default App;
