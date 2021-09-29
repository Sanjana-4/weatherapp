
import Weather from './components/Weather'
import Winfo from './components/Winfo'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Error from './components/Error';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Weather}/>
          <Route path='/winfo' component={Winfo}/>
          <Route path='/Error' component={Error}/>
        </Switch>
      </Router>
    </div>
   
   
  );
}

export default App;
