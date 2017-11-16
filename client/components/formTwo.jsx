import React from 'react';
import {Link} from 'react-router-dom';
import {Form, Text} from 'react-form';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {formTwoSubmit} from '../actions/formTwoSubmit.js';

class FormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateDB = this.updateDB.bind(this);
    this.checkFields = this.checkFields.bind(this);
    this.alertMessage = this.alertMessage.bind(this);
  }

  updateDB (data) {
    axios.put(`/users/${this.props.id}`, {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: parseInt(data.phone)
    })
    .then((res) => {
      console.log('submitted to DB', res);
    }).catch((err) => {
      console.log('Error adding user to database:', err);
    });
  }

  checkFields (data) {
    let badFields = [];
    if (!data.firstName || data.firstName.length < 1) {
      badFields.push('First name too short, must be atleast 1 character long. ');
    }
    if (!data.lastName || data.lastName.length < 1) {
      badFields.push('Last name too short, must be atleast 1 character long. ');      
    }
    if (!data.phone || (data.phone.length !== 10)) {
      badFields.push('Invalid phone number, please provide all 10 digits and only numbers: \n    i.e. 8881114444');      
    }

    if (badFields.length === 0) {
      return 'passed';
    } else {
      return badFields;
    }
  }

  alertMessage (alerts) {
    let message = 'Oops! Looks like you missed something. Please correct the following: \n';
    alerts.forEach((problem) => {
      message += '--' + problem + '\n';
    });
    alert(message);
  }

  handleSubmit (data) {
    let check = this.checkFields(data);
    if (check === 'passed') {
      this.props.formTwoSubmit(data);
      this.updateDB(data);
      this.props.history.push('/form/formThree');
    } else {
      this.alertMessage(check);
    }
  }

  render () {
    return (
      <div className='filler'>
        <div className='top-blurb'>
          Next, we need some basic information about you.
        </div>
        <div>
          <Form onSubmit={(values) => { this.handleSubmit(values); }}>
            {formApi => (
              <form className='form' onSubmit={formApi.submitForm}>
                <div className='questions'>
                  <div className='question'>
                    <label htmlFor="firstName" className='label'>What is your first name?:</label>
                    <Text field="firstName" className='input-field' placeholder={this.props.formData ? this.props.formData.firstName : 'John'}/>
                  </div>
                  <div className='question'>
                    <label htmlFor="lastName" className='label'>What is your last name?:</label>
                    <Text field="lastName" className='input-field' placeholder={this.props.formData ? this.props.formData.lastName : 'Doe'}/>
                  </div>
                  <div className='question'>
                    <label htmlFor="phone" className='label'>What is your phone number?:</label>
                    <Text field="phone" className='input-field' placeholder={this.props.formData ? this.props.formData.phone : '9255551234'}/>
                  </div>
                </div>
                <button type='submit' className='link-button save'>Save and continue</button>
              </form>
            )}
          </Form>
        </div>
        <Link to='/form/formOne' className='back-link'>Want to change something? Click here to go back</Link>
      </div>);
  }
}

function mapStateToProps (state) {
  return {
    formData: state.formTwoData,
    id: state.id
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({formTwoSubmit: formTwoSubmit}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormTwo);

