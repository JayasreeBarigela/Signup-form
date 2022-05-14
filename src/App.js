import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Signup from './components/Signup'
import Dashboard from './components/DashBoard'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Signup} />
      <Route exact path="/" component={Dashboard} />
    </Switch>
  </BrowserRouter>
)

export default App
