import React from 'react';
import {Link} from 'react-router-dom';

class FormTwo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render () {
    return (<div>
      <Link to='/form/formThree'>Click here for Form three</Link>Form Two Displayed</div>);
  }
}

export default FormTwo;