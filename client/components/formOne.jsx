import React from 'react';
import {Link} from 'react-router-dom';
import {Form, Text, Radio, RadioGroup, Select, Checkbox } from 'react-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {formOneSubmit} from '../actions/formOneSubmit.js';

class FormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (data) {
    console.log(data);
    this.props.formOneSubmit(data);
  }

  render () {
    return (<div>
      <div>
        <Form onSubmit={(values) => { this.handleSubmit(values); }}>
          {formApi => (
            <form onSubmit={formApi.submitForm}>
              <label htmlFor="username">Choose a Username:</label>
              <Text field="username" placeholder={this.props.formData ? this.props.formData.username : 'ex: Krusher99'}/>
              <label htmlFor="password">Create a password:</label>
              <Text field="password" placeholder={this.props.formData ? this.props.formData.password : 'ex: GoHawks.92!'}/>
              <label htmlFor="email">What is your email address?:</label>
              <Text field="email" placeholder={this.props.formData ? this.props.formData.email : 'ex: johnDoe@gmail.com'}/>
              <button type='submit'>Save and continue</button>
            </form>
          )}
        </Form>
      </div>
      <Link to='/form/formTwo'>Click here for form two</Link>
      Form One Displayed</div>);
  }
}

function mapStateToProps (state) {
  return {
    formData: state.formOneData
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({formOneSubmit: formOneSubmit}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormOne);