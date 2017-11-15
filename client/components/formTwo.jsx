import React from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {formOneSubmit} from '../actions/formOneSubmit.js';

class FormTwo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (data) {
    
    this.props.formOneSubmit(data);
  }

  render () {
    return (<div>
      <Link to='/form/formThree'>Click here for Form three</Link>
      <Link to='/form/formOne'>Go back and edit</Link>
      Form Two Displayed
      </div>);
  }
}

export default FormTwo;