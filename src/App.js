
import Weather from './components/Weather'
import Winfo from './components/Winfo'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Weather}/>
          <Route path='/winfo' component={Winfo}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
