import React,{Component} from 'react';
import './App.css';
import SignIn from './Component/Registercomponent/SignIn'
import SignupPage from './Component/Registercomponent/SignupPage';


class App extends Component {
  render()
  {
    console.log("in app log");
    return (
      <div className="app">
       
        <SignupPage/>
      </div>
    );
  }  
 
}


export default App;
