import React from 'react';
import {Link} from 'react-router-dom';

class FormOne extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render () {
    return (<div>
      <Link to='/form/formTwo'>Click here for form two</Link>
      Form One Displayed</div>);
  }
}

export default FormOne;