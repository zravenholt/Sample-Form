import React from 'react';
import {Link} from 'react-router-dom';
import {Form, Text, Select} from 'react-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Helper from './helper.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    state: {}

  }

  render () {
    return (
      <div>
        <div></div>
      </div>);
  }
}

function mapStateToProps (state) {
  return {
    formOneData: state.formOneData,
    formTwoData: state.formTwoData,
    formThreeData: state.formThreeData
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview);