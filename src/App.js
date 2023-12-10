//import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import TollDetails from "./components/TollDetails";
import UserEducation from './components/UserEducation';
import Map from './components/Map';
import { fetchTollInfo } from './services/tollGuruService';
import Index from './pages/index'






function App() {
  return (

    <BrowserRouter>
    
    <Switch>
          {/* <Route exact path="/" component={Home}></Route> */}
          <Route exact path="/TollDetails" component={TollDetails}></Route>
          <Route exact path="/UserEducation" component={UserEducation}></Route>
          <Route exact path="/Map" component={Map}></Route>
          <Route exact path="/fetchTollInfo" component={fetchTollInfo}></Route>
          <Route exact path="/Index" component={Index}></Route>

    </Switch>
    </BrowserRouter>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


  );
}

export default App;
