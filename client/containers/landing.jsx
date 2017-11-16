import React from 'react';
import {Link} from 'react-router-dom';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render () {
    return (<div>
      <Link to='/form/formOne'>Click here to get started</Link>
      </div>);
  }
}

export default Landing;