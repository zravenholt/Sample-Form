import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from './form.jsx';
import Landing from './landing.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render () {
    return (
    <div>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/form' component={Form}/>
      </Switch>
    </div>);
  }
}

export default App;