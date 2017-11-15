import React from 'react';
import {Link} from 'react-router-dom';

class FormThree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render () {
    return (<div>
      <Link to='/'>click here to finish</Link>Form three displayed</div>);
  }
}

export default FormThree;