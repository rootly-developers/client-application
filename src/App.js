import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LandingPage from './Components/LandingPage'
import LoginPage from './Components/LoginPage'
import EventListPage from './Components/EventListPage'
import ProfilePage from './Components/ProfilePage'
import CreateEventPage from './Components/CreateEventPage'
import EventDetailsPage from './Components/EventDetailsPage'
import MyEventPage from './Components/MyEventPage'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/login'} className="nav-link">Login</Link></li>
              <li><Link to={'/events'} className="nav-link">Events</Link></li>
              <li><Link to={'/profile'} className="nav-link">Profile</Link></li>
              <li><Link to={'/events/new'} className="nav-link">Create Event</Link></li>
              <li><Link to={'/myevents'} className="nav-link">My Event Page</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/events' component={EventListPage} />
            <Route exact path='/profile' component={ProfilePage}/>
            <Route exact path='/events/new' component={CreateEventPage} />
            <Route exact path='/events/:id' component={EventDetailsPage} />
            <Route exact path='/myevents' component={MyEventPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
