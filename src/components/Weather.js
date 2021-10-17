import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { GetWeatherDetails, GetWeather} from "../Redux/Actions";
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { GET_WEATHER } from "../Redux/Constants";
import './Weather.css'
const customId = "custom-id-yes";

toast.configure()

const handledipatch = () => async dispatch => {
  return dispatch
}
class Weather extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }
  componentWillReceiveProps= () =>{
    GetWeatherDetails();
  }
  
  diffToast = () => {
    toast.error('Something went wrong',{
        toastId:customId
});
}
notify = () =>{
  toast.warning('Select Valid City',{
      toastId: customId


      });
  }


async handleEvent (e) {
    e.preventDefault()
    const { searchInput } = this.state;
    const { GetWeatherDetails, handledipatch } =  this.props.action;
    
    if(searchInput === ""){this.notify()}
    e.preventDefault()
    if (searchInput !==""){
      await handledipatch().then(async (dispatch)=> {
        dispatch({ type: GET_WEATHER.PENDING });
        await GetWeather(this.state.searchInput).then((da)=>{
          console.log(da);
          dispatch({ type: GET_WEATHER.SUCCESS, payload: da.data });
        })
      })
      //await GetWeather(this.state.searchInput);
     //await GetWeatherDetails(this.state.searchInput).then(data=>{console.log(data)})
      this.setState({ searchInput: "" });
      
    const {data, success}=this.props.weatherData;
    const {cod}=data;

    e.preventDefault()
   if (cod !==200){this.diffToast()}
    
    else if ( success ? cod === 200 : null){
     await this.props.history.push({
        pathname: '/Winfo',
      })
    }
  }

}

handleOnChange = e => {
  e.preventDefault()
    this.setState({
    searchInput: e.target.value
  });
};

  render() {

    const { searchInput } = this.state;


return( 
  <div className="weather">
      <center>
          <form  className="form" onSubmit={(e)=>this.handleEvent(e)} >
              <h2>Weather Forecast 🌧 </h2>
              <select id="city" className="weath_dropdown" onChange={(e)=>this.handleOnChange(e)} value={searchInput} >
                  <option hidden value="Select City">Select City</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="pune">Pune</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Bangalore">Bangalore</option>
              </select>
              <br/>
              <button className="button" onClick={(e)=>this.handleEvent(e)} >Get Weather</button>
              <ToastContainer/>
          </form>
      </center>
  </div>
)
}
  }



const mapStateToProps = state => ({
  weatherData: state
});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({ GetWeatherDetails, handledipatch }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);