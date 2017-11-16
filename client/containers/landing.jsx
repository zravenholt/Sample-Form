import React from 'react';
import {Link} from 'react-router-dom';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render () {
    return (
      <div className='landing'>
          <div className='greeting'>
            Greetings! Please take a few moments to give us some info about you.
          </div>
          <Link to='/form/formOne' className='link-button' id='start'>Click here to get started</Link>
      </div>);
  }
}

export default Landing;