import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Form, Text, Select} from 'react-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {formThreeSubmit} from '../actions/formThreeSubmit.js';
import Helper from './helper.jsx';

class FormThree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateDB = this.updateDB.bind(this);
    this.checkFields = this.checkFields.bind(this);
    this.alertMessage = this.alertMessage.bind(this);
  }

  checkFields (data) {
    let badFields = [];
    if (!data.streetAddress || data.streetAddress.length < 1) {
      badFields.push('Not a valid address, please provide a valid address. ');
    }
    if (!data.city || data.city.length < 1) {
      badFields.push('Not a valid city name, please provide a city');      
    }
    if (!data.state || (Helper.states.indexOf(data.state) === -1)) {
      badFields.push('Invalid state, please enter the full name of your state. ');      
    }
              //this statement is necessary because zips can start with 0, and parseInt removes 0 from number.
    if (!data.zip || (data.zip.toString().length && parseInt(data.zip).toString().length !== 5)) {
      badFields.push('Invalid zip code, please enter the full name of your state. ');      
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

  updateDB (data) {
    axios.put(`/users/${this.props.id}`, {
      streetAddress: data.streetAddress,
      city: data.city,
      state: data.state,
      zip: parseInt(data.zip)
    })
    .then((res) => {
      console.log('submitted to DB', res);
    }).catch((err) => {
      console.log('Error adding user to database:', err);
    });
  }

  handleSubmit (data) {
    let stateName = data.state.slice(0, 1).toUpperCase() + data.state.slice(1).toLowerCase();
    data.state = stateName;
    let check = this.checkFields(data);
    if (check === 'passed') {
      this.props.formThreeSubmit(data);
      this.updateDB(data);
      this.props.history.push('/form/overview');
    } else {
      this.alertMessage(check);
    }
  }

  render () {
    return (
      <div>
        <div>
          <Form onSubmit={(values) => { this.handleSubmit(values); }}>
            {formApi => (
              <form onSubmit={formApi.submitForm}>
                <label htmlFor="streetAddress">What is your street address?:</label>
                <Text field="streetAddress" placeholder={this.props.formData ? this.props.formData.streetAddress : 'ex: 12345 Main St.'}/>
                <label htmlFor="city">What city do you live in?: </label>
                <Text field="city" placeholder={this.props.formData ? this.props.formData.city : 'ex: San Francisco'}/>
                <label htmlFor='state'>What state is that in?:</label>
                <Text field="state" placeholder={this.props.formData ? this.props.formData.state : 'ex: California'}/>
                <label htmlFor="zip">What is your 5 digit zip code?: </label>
                <Text field="zip" placeholder={this.props.formData ? this.props.formData.zip : 'ex: 94102'}/>
                <button type='submit'>Save and continue</button>
              </form>
            )}
          </Form>
        </div>
        <Link to='/form/formTwo'>Go back and Edit</Link>
      </div>);
  }
}

function mapStateToProps (state) {
  return {
    formData: state.formThreeData,
    id: state.id
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({formThreeSubmit: formThreeSubmit}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormThree);