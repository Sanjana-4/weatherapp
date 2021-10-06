import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { GetWeatherDetails } from "../Redux/Actions";
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useHistory } from 'react-router-dom'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import './Weather.css'
const customId = "custom-id-yes";

toast.configure()

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }

//   componentDidMount= e =>{
//    e.preventDefault();
//    const { GetWeatherDetails } = this.props.action;
//    GetWeatherDetails();
//  }
 handleSubmit = e => {
  e.preventDefault();
  const { searchInput } = this.state;
  const { GetWeatherDetails } = this.props.action;
  if (searchInput) GetWeatherDetails(this.state.searchInput);
  this.setState({ searchInput: "" });
};
handleOnChange = e => {
  e.preventDefault();
  this.setState({
    searchInput: e.target.value
  });
};
handleChange = e => {
  e.preventDefault();
  
    this.props.history.push({
        pathname: '/Winfo',
        
      })
}

 
  render() {

    const notify = () =>{
        toast.warning('Select Valid City',{
            toastId: customId
    
    
            });
        }
        
            const diffToast = () => {
                toast.error('Something went wrong',{
                    toastId:customId
            });
        }

       
       

    const { data, SUCCESS , PENDING} = this.props.weatherData;
    const {  cod } = data;
    const { searchInput } = this.state;
   

    return (
      
           <div className="weather">
            <center>
            <form  className="form" onSubmit={(e)=>this.handleSubmit(e)}   >
                   <h2>Weather Forecast 🌧   </h2>
                 <select id="city" className="weath_dropdown" onChange={(e)=>this.handleOnChange(e)} value={searchInput} >
                 <option hidden value = "Select City">Select City</option>
                <option value="chennai">Chennai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="pune">Pune</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                </select>
                <br/>
                <button className="button" onClick={(e)=>this.handleChange(e)}>Get Weather</button>
            <ToastContainer/>
                </form>
            </center>
            <div>
            
           
            </div>
        </div>
    );
  }
}
 

const mapStateToProps = state => ({
  weatherData: state
});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({ GetWeatherDetails }, dispatch)
});

 
export default connect(mapStateToProps, mapDispatchToProps)(Weather);
