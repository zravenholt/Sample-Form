import React from 'react';
import {Link} from 'react-router-dom';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render () {
    return (<div>
      <div className='background'>
        <div className='center-container'>
          Greetings! Please take a few moments to give us some info about you.
        </div>
        <Link to='/form/formOne'>Click here to get started</Link>
      </div>
      </div>);
  }
}

export default Landing;