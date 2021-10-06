
import Weather from './components/Weather'
import Winfo from './components/Winfo'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import WeatherStore from "./Redux/Store";

function App() {
  return (
    <div>
      <Router>
      <Provider store={WeatherStore}>
        <Switch>
          <Route path='/' exact component={Weather}/>
          <Route path='/Winfo' component={Winfo}/>
        </Switch>
        </Provider>
      </Router>
    </div>
   
   
  );
}

export default App;