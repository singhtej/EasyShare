import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './components/Home/Landing'
import Login from './components/Login'
import Register from './components/Register/Register'
import Profile from './components/Profile'
import Dashboard from './components/Dashboard/Dashboard'
import AddExp from './components/Addexp/Addexp'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

      route: 'home'
    }

  }

  onRouteChange = (route) => {

    this.setState({ route: route });
    console.log(route)
  }
  render() {
    const route = this.state
    console.log(route)
    return (
      <Router>
        <div className="App">
          <div>
            <Navbar />
          </div>
          <div>
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/addexp" component={AddExp} />
            </div>
            <Route exact path="/" component={Landing} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
