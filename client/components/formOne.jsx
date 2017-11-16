import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Form, Text} from 'react-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {formOneSubmit} from '../actions/formOneSubmit.js';
import {grabID} from '../actions/grabID.js';
import helper from './helper.jsx';

class FormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendToDB = this.sendToDB.bind(this);
    this.checkFields = this.checkFields.bind(this);
    this.alertMessage = this.alertMessage.bind(this);
  }

  sendToDB (data) {
    if (this.props.id) {
      axios.put(`/users/${this.props.id}`, {
        username: data.username,
        password: data.password,
        email: data.email
      })
      .then((res) => {
        console.log('resubmitted to DB', res);
      }).catch((err) => {
        console.log('Error adding user to database:', err);
      });
    } else {
      axios.post('/users', {
        username: data.username,
        password: data.password,
        email: data.email
      })
      .then((res) => {
        console.log('submitted to DB', res);
        this.props.grabID(res.data.saved.id);
      }).catch((err) => {
        console.log('Error adding user to database:', err);
      });
    }
  }

  
  checkFields (data) {
    let badFields = [];
    if (!data.username || data.username.length < 1) {
      badFields.push('Username too short, must be atleast 1 character long. ');
    }
    if (!data.password || data.password.length < 5) {
      badFields.push('Password too short, must be atleast 5 characters long. ');      
    }
    if (!data.email || !helper.validateEmail(data.email)) {
      badFields.push('Invalid email, please provide a valid email');      
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
      this.props.formOneSubmit(data);
      this.sendToDB(data);
      this.props.history.push('/form/formTwo');
    } else {
      this.alertMessage(check);
    }
  }

  render () {
    return (
      <div className='filler'>
        <div className='top-blurb'>
          Excellent! First, we will need information to create your account.
        </div>
        <div>
          <Form onSubmit={(values) => { this.handleSubmit(values); }}>
            {formApi => (
              <form className='form' onSubmit={formApi.submitForm}>
                <div className='questions'>
                  <div className='question'>
                    <label htmlFor="username" className='label'>Choose a Username:</label>
                    <Text field="username" className='input-field' placeholder={this.props.formData ? this.props.formData.username : 'ex: Krusher99'}/>
                  </div>
                  <div className='question'>
                    <label htmlFor="password" className='label'>Create a password:</label>
                    <Text field="password" className='input-field' placeholder={this.props.formData ? this.props.formData.password : 'ex: GoHawks.92!'}/>
                  </div>
                  <div className='question'>
                    <label htmlFor="email" className='label'>What is your email address?:</label>
                    <Text field="email" className='input-field' placeholder={this.props.formData ? this.props.formData.email : 'ex: johnDoe@gmail.com'}/>
                  </div>
                </div>
                <button type='submit' className='link-button save'>Save and continue</button>
              </form>
            )}
          </Form>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    formData: state.formOneData,
    id: state.id
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    formOneSubmit: formOneSubmit,
    grabID: grabID}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormOne);