import { ChakraProvider } from "@chakra-ui/react";
import Login from "../containers/login/Login";
import Register from "../containers/login/Register";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

  function App() {
    return (
      <ChakraProvider>
          <Router>
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/registro' component={Register} />
            </Switch>
          </Router>
      </ChakraProvider>
    );
  }
  
  export default App;
