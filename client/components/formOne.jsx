import React from 'react';
import {Link} from 'react-router-dom';
import { Form, Text, Radio, RadioGroup, Select, Checkbox } from 'react-form';

class FormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (data) {
    console.log(data);
  }

  render () {
    return (<div>
      <div>
        <Form onSubmit={(values) => { console.log('triggered', values); }}>
          {formApi => (
            <form onSubmit={formApi.submitForm}>
              <label htmlFor="username">Choose a Username:</label>
              <Text field="username"/>
              <label htmlFor="password">Create a password:</label>
              <Text field="password"/>
              <label htmlFor="email">What is your email address?:</label>
              <Text field="email"/>
              <button type='submit'>Save and continue</button>
            </form>
          )}
        </Form>
      </div>
      <Link to='/form/formTwo'>Click here for form two</Link>
      Form One Displayed</div>);
  }
}

export default FormOne;