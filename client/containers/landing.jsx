import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render () {
    return (<div>
      <Link to='/form'>Click here to get started</Link>
      hello from landing
      </div>);
  }
}

export default Landing;