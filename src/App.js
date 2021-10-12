import React from 'react';
import Weather from './components/Weather'
import Winfo from './components/Winfo'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import WeatherStore from "./Redux/Store";
  class App extends React.Component {
    componentWillMount() {
      sessionStorage.reload = true;
      }
    render(){
      if(sessionStorage.reload && window.location.pathname!=='/') {
        console.log(this.props);
          sessionStorage.reload = "";
          window.location.href = "/";
        } 
  return (
    <div>
    
      <Router history={ window }>
        <Switch>
          <Route path='/' exact component={Weather}/>
          <Route path='/Winfo' component={Winfo}/>
        </Switch>
        </Router>
        
    </div>
   
   
  );
}
  }
export default App;