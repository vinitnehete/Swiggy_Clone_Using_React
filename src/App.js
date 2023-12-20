import { Provider } from "react-redux";
import "./App.css"
import Body from "./Components/Body";

import appstore from "./Constants/appstore";
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";
 

function App() {

  
  return (
    <Provider  store={appstore}>
    <div >
    <Router>
      <Routes>
       
        <Route path="/" element={<Body />} />
        <Route path="/restaurant/:id" element={<RestaurantMenu />} />
       
      </Routes>
    </Router>
        
       

      
       
    </div>
    </Provider>
  );
}

export default App;
