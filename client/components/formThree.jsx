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
    this.buildStateName = this.buildStateName.bind(this);
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

  buildStateName (state) {
    let words = state.split(' ');
    let newWords = [];
    words.forEach((word) => {
      newWords.push(word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase());
    });
    return newWords.join(' ');
  }

  handleSubmit (data) {
    data.state = this.buildStateName(data.state);
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
      <div className='filler'>
        <div className='top-blurb'>
          Finally, please provide us with your current address.
        </div>
        <div>
          <Form onSubmit={(values) => { this.handleSubmit(values); }}>
            {formApi => (
              <form className='form' onSubmit={formApi.submitForm}>
                <div className='questions'>
                  <div className='question'>
                    <label htmlFor="streetAddress" className='label'>What is your street address?:</label>
                    <Text field="streetAddress" className='input-field' placeholder={this.props.formData ? this.props.formData.streetAddress : 'ex: 12345 Main St.'}/>
                  </div>
                  <div className='question'>
                    <label htmlFor="city" className='label'>What city do you live in?: </label>
                    <Text field="city" className='input-field' placeholder={this.props.formData ? this.props.formData.city : 'ex: San Francisco'}/>
                  </div>
                  <div className='question'>
                    <label htmlFor='state' className='label'>What state is that in?:</label>
                    <Text field="state" className='input-field' placeholder={this.props.formData ? this.props.formData.state : 'ex: California'}/>
                  </div>
                  <div className='question'>
                    <label htmlFor="zip" className='label'>What is your 5 digit zip code?: </label>
                    <Text field="zip" className='input-field' placeholder={this.props.formData ? this.props.formData.zip : 'ex: 94102'}/>
                  </div>
                </div>
                <button type='submit' className='link-button save'>Save and continue</button>
              </form>
            )}
          </Form>
        </div>
        <Link to='/form/formTwo' className='back-link'>Want to change something? Click here to go back</Link>
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