import React from 'react';
import {Link} from 'react-router-dom';

class FormThree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render () {
    return (<div>
      <Link to='/'>click here to finish</Link>
      <Link to='/form/formTwo'>Go back and Edit</Link>
      </div>);
  }
}

export default FormThree;