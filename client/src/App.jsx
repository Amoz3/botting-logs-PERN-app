import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ContextProvider } from './context/Context';
import { Home } from './routes/Home';


const App = () => {
  return (
    <ContextProvider>
        <div className="container">
          <Router>
            <Switch>
              <Route exact path ="/" component={Home}/>
            </Switch>
          </Router>
        </div>
    </ContextProvider>
  )
}

export default App;
