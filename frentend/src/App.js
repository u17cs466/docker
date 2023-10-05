import "./App.css";
import { Route, Switch } from 'react-router-dom'
import Imagepage from "./components/Imagepage";
import Homepage from "./components/Homepage";

function App() {
  
  return (
    <>
      <div className='h-screen w-screen'>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/image' component={Imagepage} />
      </Switch>
      </div>
    </>
   
  );
}

export default App;