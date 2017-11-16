import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Form, Text} from 'react-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {formOneSubmit} from '../actions/formOneSubmit.js';
import {grabID} from '../actions/grabID.js';

class FormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendToDB = this.sendToDB.bind(this);
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

  handleSubmit (data) {
    this.props.formOneSubmit(data);
    this.sendToDB(data);
    this.props.history.push('/form/formTwo');
  }

  render () {
    return (
      <div>
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
      </div>);
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