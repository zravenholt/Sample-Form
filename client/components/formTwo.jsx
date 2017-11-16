import React from 'react';
import {Link} from 'react-router-dom';
import {Form, Text} from 'react-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {formTwoSubmit} from '../actions/formTwoSubmit.js';

class FormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (data) {
    this.props.formTwoSubmit(data);
    this.props.history.push('/form/formThree');
  }

  render () {
    return (
      <div>
        <div>
          <Form onSubmit={(values) => { this.handleSubmit(values); }}>
            {formApi => (
              <form onSubmit={formApi.submitForm}>
                <label htmlFor="firstName">What is your first name?:</label>
                <Text field="firstName" placeholder={this.props.formData ? this.props.formData.firstName : 'John'}/>
                <label htmlFor="lastName">What is your last name?:</label>
                <Text field="lastName" placeholder={this.props.formData ? this.props.formData.lastName : 'Doe'}/>
                <label htmlFor="phone">What is your phone number?:</label>
                <Text field="phone" placeholder={this.props.formData ? this.props.formData.phone : '9255551234'}/>
                <button type='submit'>Save and continue</button>
              </form>
            )}
          </Form>
        </div>
        <Link to='/form/formOne'>Go back and edit</Link>
      </div>);
  }
}

function mapStateToProps (state) {
  return {
    formData: state.formTwoData
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({formTwoSubmit: formTwoSubmit}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormTwo);

